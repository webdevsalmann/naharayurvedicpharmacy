"use client"
import Section, { SectionHeading } from '@/components/section/section'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

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
      <h2>Ayurveda Ideal Path to Health & Wealth</h2>
      
      <div className="mt-base grid md:grid-cols-2 gap-base md:gap-block">
        <div className="rounded-md aspect-[4/3] border overflow-hidden md:order-2">
          <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 5000, })]}>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className='w-full aspect-[4/3] object-cover object-center'
                  src="/images/common/1.jpg"
                  width={400}
                  height={400}
                  alt='Ayurveda'
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='w-full aspect-[4/3] object-cover object-center'
                  src="/images/common/2.jpg"
                  width={400}
                  height={400}
                  alt='Ayurveda'
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className='w-full aspect-[4/3] object-cover object-center'
                  src="/images/common/3.jpg"
                  width={400}
                  height={400}
                  alt='Ayurveda'
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="md:order-1">
          <Accordion type="single" defaultValue='benefit1' collapsible>
            {benefits.map(item => (
              <AccordionItem value={item.id} key={item.id + "BenefitAccordion"}>
                <AccordionTrigger className="text-left no-hd">{item.title}</AccordionTrigger>
                <AccordionContent>{item.desctiption}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  )
}
