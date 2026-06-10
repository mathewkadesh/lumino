import { useState } from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { EyebrowPill } from '@/components/ui/EyebrowPill'
import { AccordionItem } from '@/components/ui/AccordionItem'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const faqs = [
  {
    question: 'Does it really cost nothing to install?',
    answer: `Yes. We cover the full cost of the hardware, the installation labour, and the initial design work. You pay nothing upfront — just the monthly subscription from the day we switch it on.`,
  },
  {
    question: 'What happens if the screen breaks or develops a fault?',
    answer: `We own the hardware, so repairs and replacements are on us. If something goes wrong, just call us and we'll sort it — usually within 48 hours. There's no call-out fee.`,
  },
  {
    question: 'Can I update it myself, or do I need to call you every time?',
    answer: `You get access to our simple app where you can swap out prices, turn specials on and off, or add new slides yourself. For more involved redesigns, just drop us a message and our design team will handle it — usually same-day.`,
  },
  {
    question: `What if my shop isn't in Bristol?`,
    answer: `We're Bristol-first right now. If you're in or around the city — including Clifton, Bedminster, Easton, St Pauls, Redland, Bishopston, Fishponds, Kingswood, and beyond — we can almost certainly reach you. Get in touch and we'll confirm.`,
  },
  {
    question: `What's the minimum contract length?`,
    answer: `Our standard term is 12 months. After that it rolls monthly and you can give 30 days' notice. We think once you see what a Lumino screen does for trade, you'll want to keep it.`,
  },
  {
    question: 'Will the screen be bright enough to see in daylight?',
    answer: `Absolutely. Our panels are rated at 4,000–6,000 nits depending on the model — that's bright enough to read comfortably in full afternoon sun. The standard A-board behind a window is around 250 nits. There's no comparison.`,
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <SectionWrapper id="faq" bg="var(--lumino-paper-2)">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <EyebrowPill className="mx-auto mb-6">FAQ</EyebrowPill>
          <h2
            className="font-display font-semibold text-[var(--lumino-ink)] tracking-[-0.025em] leading-[1.1]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Questions, answered.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--lumino-line)]">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
