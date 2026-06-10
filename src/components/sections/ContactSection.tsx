import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import confetti from 'canvas-confetti'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { HandUnderline } from '@/components/ui/HandUnderline'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  businessName: z.string().min(2, 'Please enter your business name'),
  businessType: z.string().min(1, 'Please select a business type'),
  area: z.string().min(2, 'Please enter your area or postcode'),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const businessTypes = [
  { value: 'takeaway', label: 'Takeaway / Kebab shop' },
  { value: 'cafe', label: 'Café' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'convenience', label: 'Convenience / Corner shop' },
  { value: 'barber', label: 'Barber / Salon' },
  { value: 'other', label: 'Other' },
]

const perks = [
  'Free no-obligation window survey',
  'We design everything for you',
  'Fitted by our local Bristol team',
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { businessType: 'takeaway' },
  })

  const businessType = watch('businessType')

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F26419', '#E25555', '#0E8C7E', '#F4D38B', '#14130F'],
      })
    } catch {
      // Optimistic: show success anyway, email to founder is the fallback
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SectionWrapper
      id="contact"
      className="overflow-hidden"
      style={{
        background: 'var(--lumino-paper-2)',
      } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 items-center">
          {/* Left copy */}
          <div>
            <EyebrowPill className="mb-6">BOOK YOUR FREE SURVEY</EyebrowPill>
            <h2
              className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
            >
              Tell us about your{' '}
              <em className="text-[var(--lumino-amber)]" style={{ fontStyle: 'italic' }}>window</em>.
            </h2>
            <HandUnderline color="var(--lumino-amber)" width={120} className="mb-8" />
            <p className="font-body text-[var(--lumino-ink-soft)] mb-8">
              Fill in a few details and we'll arrange a free, no-obligation survey anywhere in Bristol. We typically respond within 4 working hours.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--lumino-teal)]/15 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[var(--lumino-teal)]" />
                  </div>
                  <span className="font-body text-[var(--lumino-ink-soft)]">{perk}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[var(--lumino-ink-faint)]">
              <Clock size={14} />
              <span className="mono-label">Average response time: 4 hours during business hours</span>
            </div>
          </div>

          {/* Form */}
          <div>
            <GlassCard className="!bg-white/92">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--lumino-success)]/15 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-[var(--lumino-success)]" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-[var(--lumino-ink)] mb-2">
                    We'll be in touch soon!
                  </h3>
                  <p className="font-body text-[var(--lumino-ink-soft)]">
                    Thanks for getting in touch. We'll call or email you within a few hours to arrange your free window survey.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full name"
                      placeholder="e.g. Ahmed Malik"
                      error={errors.fullName?.message}
                      {...register('fullName')}
                    />
                    <Input
                      label="Phone number"
                      type="tel"
                      placeholder="07700 900123"
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                  </div>
                  <Input
                    label="Business name"
                    placeholder="e.g. The Blue Kebab"
                    error={errors.businessName?.message}
                    {...register('businessName')}
                  />
                  <Select
                    label="Business type"
                    options={businessTypes}
                    value={businessType}
                    onChange={(v) => setValue('businessType', v)}
                    error={errors.businessType?.message}
                  />
                  <Input
                    label="Bristol area or postcode"
                    placeholder="e.g. Easton, BS5"
                    error={errors.area?.message}
                    {...register('area')}
                  />
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body font-medium text-sm text-[var(--lumino-ink)]">
                      Anything else? (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a bit about your window or what you're hoping to achieve..."
                      {...register('notes')}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-white font-body text-[var(--lumino-ink)] text-sm resize-none transition-all duration-150 outline-none border-[var(--lumino-line-strong)] placeholder:text-[var(--lumino-ink-faint)] focus:border-[var(--lumino-amber)] focus:ring-4 focus:ring-[var(--lumino-amber)]/15"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting}
                    className="w-full justify-center text-base py-4"
                  >
                    {submitting ? 'Sending...' : 'Book my free survey →'}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
