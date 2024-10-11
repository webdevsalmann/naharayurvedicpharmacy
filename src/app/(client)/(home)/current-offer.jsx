import Section from '@/components/section/section'
import Image from 'next/image'
import React from 'react'

export default function CurrentOffer() {
  return (
    <div className="w-full">
      <Image
        className='w-full'
        src="/images/offer/1.png"
        width={1000}
        height={450}
        alt='Nahar ayurvedic pharmacy offer'
      />
    </div>
  )
}
