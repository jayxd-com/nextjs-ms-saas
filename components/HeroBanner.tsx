import Image from 'next/image'
import React from 'react'

const heroBannerImg = '@/pub'

const HeroBanner = () => {
    return (
        <section className='container mx-auto h-[600px]'>
            <div className='flex flex-col justify-center items-center max-w-3xl mx-auto space-y-4'>
                <h1 className='font-bold text-7xl text-center'>The Coolest Way to<br />
                    <span className='text-primary'>Grow Your Business</span></h1>
                <p className='text-2xl text-center'>We are a digital marketing agency that specializes in helping organizations amplify their growth and profitability.</p>
            </div>

            <div className='relative w-full h-full'>
                <Image
                    src="/images/home_hero_banner.svg"
                    alt="Description of the image"
                    fill
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default HeroBanner