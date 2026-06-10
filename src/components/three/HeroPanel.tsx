import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LED_VERT = `
uniform float uBend;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vec3 pos = position;

  float bendAngle = uBend * 0.8;
  if (abs(bendAngle) > 0.001) {
    float radius = 4.0 / bendAngle;
    pos.x = sin(position.x / radius) * radius;
    pos.z = (cos(position.x / radius) - 1.0) * radius;
  }

  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

const LED_FRAG = `
uniform float uTime;
varying vec2 vUv;

vec3 lerpColor(vec3 a, vec3 b, float t) { return a + (b - a) * t; }

void main() {
  // LED pixel grid
  vec2 grid = fract(vUv * vec2(32.0, 18.0));
  float cell = smoothstep(0.45, 0.35, length(grid - 0.5));

  // Colour gradient across panel
  vec3 colA = vec3(1.0, 0.784, 0.239); // sunshine
  vec3 colB = vec3(1.0, 0.353, 0.306); // coral
  vec3 colC = vec3(0.925, 0.286, 0.600); // magenta
  vec3 colD = vec3(0.176, 0.357, 1.0); // cobalt

  float t = vUv.x;
  vec3 col = t < 0.33
    ? lerpColor(colA, colB, t / 0.33)
    : t < 0.66
      ? lerpColor(colB, colC, (t - 0.33) / 0.33)
      : lerpColor(colC, colD, (t - 0.66) / 0.34);

  // Animated scan line
  float scan = sin((vUv.y - uTime * 0.12) * 80.0) * 0.04 + 0.96;

  // Panel edge vignette
  vec2 uv2 = vUv * 2.0 - 1.0;
  float vignette = 1.0 - dot(uv2 * 0.4, uv2 * 0.4);
  vignette = clamp(vignette, 0.0, 1.0);

  vec3 finalCol = col * cell * scan * vignette;
  float alpha = cell * 0.92 + 0.08;

  gl_FragColor = vec4(finalCol, alpha);
}
`

function PanelMesh({ bend }: { bend: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useRef({
    uBend: { value: 0 },
    uTime: { value: 0 },
  })

  useFrame(({ clock }) => {
    if (!matRef.current) return
    matRef.current.uniforms.uTime.value = clock.getElapsedTime()
    matRef.current.uniforms.uBend.value +=
      (bend.current - matRef.current.uniforms.uBend.value) * 0.06
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 2.25, 64, 36]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={LED_VERT}
        fragmentShader={LED_FRAG}
        uniforms={uniforms.current}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export function HeroPanel() {
  const bend = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const onScroll = () => {
      const hero = document.getElementById('hero')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.8)))
      bend.current = progress
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduced])

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[-3, 2, 3]} intensity={1.2} color="#FF5A4E" />
        <pointLight position={[3, -2, 3]} intensity={1.0} color="#2D5BFF" />

        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
          <group rotation={[0.12, -0.18, 0]}>
            <PanelMesh bend={bend} />
          </group>
        </Float>
      </Canvas>
    </div>
  )
}
