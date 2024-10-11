import Section, { SectionHeading } from '@/components/section/section'
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const benefits = [
  {
    id: "benefit1",
    title: "Holistic Approach to Health",
    desctiption: "Ayurveda treats the whole person—mind, body, and spirit—by addressing the root cause of imbalances. This comprehensive approach promotes lasting well-being rather than just temporary relief."
  },
  {
    id: "benefit2",
    title: "Natural and Safe Remedies",
    desctiption: "Ayurvedic treatments are derived from natural herbs, oils, and minerals, which are gentle on the body and free from synthetic chemicals, ensuring safe, effective healing."
  },
  {
    id: "benefit3",
    title: "Personalized Health Solutions",
    desctiption: "Ayurveda recognizes that each person is unique. It tailors treatments based on individual body types and needs, making it a highly personalized approach to health."
  },
  {
    id: "benefit4",
    title: "Centuries of Proven Results",
    desctiption: "Backed by thousands of years of tradition, Ayurveda has stood the test of time as a trusted system of medicine, blending ancient wisdom with modern insights for optimal health."
  },
]

export default function Benefits() {
  return (
    <Section className="bg-primary text-secondary">
      <div className="grid md:grid-cols-2">
        <div className="">
          <h2>Ayurveda Ideal Path to Health & Wealth</h2>
          <Accordion type="single" collapsible>
            {benefits.map(item => (
              <AccordionItem value={item.id} key={item.id + "BenefitAccordion"}>
                <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                <AccordionContent>{item.desctiption}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

    </Section>
  )
}
