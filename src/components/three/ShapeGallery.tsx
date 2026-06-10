import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'
import { cn } from '@/lib/cn'

const LED_FRAG = `
uniform float uTime;
varying vec2 vUv;

vec3 lerpColor(vec3 a, vec3 b, float t) { return a + (b - a) * t; }

void main() {
  vec2 grid = fract(vUv * vec2(24.0, 14.0));
  float cell = smoothstep(0.45, 0.3, length(grid - 0.5));

  vec3 colA = vec3(1.0, 0.784, 0.239);
  vec3 colB = vec3(0.204, 0.357, 1.0);
  float t = vUv.x + sin(uTime * 0.4) * 0.2;
  vec3 col = lerpColor(colA, colB, clamp(t, 0.0, 1.0));

  float scan = sin((vUv.y - uTime * 0.08) * 60.0) * 0.03 + 0.97;
  vec2 uv2 = vUv * 2.0 - 1.0;
  float vig = clamp(1.0 - dot(uv2 * 0.4, uv2 * 0.4), 0.0, 1.0);

  gl_FragColor = vec4(col * cell * scan * vig, cell * 0.9 + 0.1);
}
`

const LED_VERT = `
uniform float uBend;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  float bendAngle = uBend * 0.9;
  if (abs(bendAngle) > 0.001) {
    float radius = 4.0 / bendAngle;
    pos.x = sin(position.x / radius) * radius;
    pos.z = (cos(position.x / radius) - 1.0) * radius;
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

type Shape = 'flat' | 'curved' | 'pillar' | 'hanging'

const BEND_MAP: Record<Shape, number> = {
  flat: 0,
  curved: 0.6,
  pillar: 1.4,
  hanging: 0,
}

const ROTATION_MAP: Record<Shape, [number, number, number]> = {
  flat: [0.1, -0.15, 0],
  curved: [0.08, -0.1, 0],
  pillar: [0, 0.3, 0],
  hanging: [1.2, 0, 0],
}

function ShapeMesh({ shape }: { shape: Shape }) {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const groupRef = useRef<THREE.Group>(null)

  const uniforms = useRef({
    uBend: { value: BEND_MAP[shape] },
    uTime: { value: 0 },
  })

  const targetBend = BEND_MAP[shape]
  const targetRot = ROTATION_MAP[shape]

  useFrame(({ clock }) => {
    if (!matRef.current || !groupRef.current) return
    const t = clock.getElapsedTime()
    matRef.current.uniforms.uTime.value = t
    matRef.current.uniforms.uBend.value +=
      (targetBend - matRef.current.uniforms.uBend.value) * 0.05

    groupRef.current.rotation.x += (targetRot[0] - groupRef.current.rotation.x) * 0.05
    groupRef.current.rotation.y += (targetRot[1] - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.z += (targetRot[2] - groupRef.current.rotation.z) * 0.05
  })

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={groupRef} rotation={ROTATION_MAP[shape]}>
        <mesh>
          <planeGeometry args={[3.5, 2, 64, 36]} />
          <shaderMaterial
            ref={matRef}
            vertexShader={LED_VERT}
            fragmentShader={LED_FRAG}
            uniforms={uniforms.current}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  )
}

const shapes: { id: Shape; label: string }[] = [
  { id: 'flat', label: 'Flat' },
  { id: 'curved', label: 'Curved' },
  { id: 'pillar', label: 'Pillar wrap' },
  { id: 'hanging', label: 'Hanging' },
]

export function ShapeGallery() {
  const [active, setActive] = useState<Shape>('flat')

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex-1 rounded-2xl overflow-hidden bg-[var(--lumino-ink)]">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#14130F']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-3, 2, 3]} intensity={1.5} color="#FF5A4E" />
          <pointLight position={[3, -2, 3]} intensity={1.2} color="#2D5BFF" />
          <pointLight position={[0, 3, 2]} intensity={0.8} color="#FFC83D" />

          <ShapeMesh shape={active} />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
          />
        </Canvas>
      </div>

      {/* Shape chips */}
      <div className="flex gap-2 justify-center">
        {shapes.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={cn(
              'px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 cursor-pointer',
              active === id
                ? 'bg-[var(--lumino-ink)] text-[var(--lumino-paper)]'
                : 'bg-[var(--lumino-paper)] border border-[var(--lumino-line-strong)] text-[var(--lumino-ink-soft)] hover:border-[var(--lumino-ink)]'
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
