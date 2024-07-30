"use client";
import React from 'react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='relative w-full lg:h-[800px] md:h-[500opx] h-[300px]'>
        <Image
          src="/images/home_hero_banner.svg"
          alt="Description of the image"
          fill
                    className="object-contain"
        />
      </div>
  )
}

export default HeroImage