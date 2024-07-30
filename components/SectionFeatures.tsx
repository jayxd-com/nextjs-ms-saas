import React from 'react'
import Image from 'next/image'

const SectionFeatures = () => {
    return (

            <section className="section-features py-20">

                <div className="section-space">

                    <div className="container-default">

                        <div className="mb-[60px] xl:mb-20 jos" data-jos_once="1" data-jos_animation="fade-up" data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_delay="0.5" data-jos_counter="1">

                            <div className="mx-auto max-w-[636px]">
                                <h2 className="text-5xl leading-snug text-center font-GeneralSans font-semibold">
                                    Turn traffic with insanely SEO &amp; growth into revenue
                                </h2>
                            </div>

                        </div>

                        <div className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3">

                            <div className="relative flex flex-col items-center gap-[30px] px-4 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-[120px] after:w-px after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden xl:px-[30px] xl:after:block jos" data-jos_animation="fade-left" data-jos_delay="0" data-jos_once="1" data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_counter="1">
                                <Image
                                    src="/images/home_hero_banner.svg"
                                    alt="Description of the image"
                                    width="70"
                                    height="70"

                                />
                                <div>
                                    <h3 className="mb-[15px] text-xl font-semibold capitalize leading-[1.33] -tracking-[0.5px] text-ColorBlack xl:text-2xl">
                                        Increases Brand Awareness
                                    </h3>
                                    <p>
                                        You want to stand out in your industry as a leader, but
                                        you also want to be seen as a relevant solution for your
                                        audience.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex flex-col items-center gap-[30px] px-4 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-[120px] after:w-px after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden xl:px-[30px] xl:after:block jos" data-jos_animation="fade-left" data-jos_delay="0.3" data-jos_once="1" data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_counter="1">
                                <Image
                                    src="/images/home_hero_banner.svg"
                                    alt="Description of the image"
                                    width="70"
                                    height="70"

                                />
                                <div>
                                    <div className="mb-[15px] text-xl font-semibold capitalize leading-[1.33] -tracking-[0.5px] text-ColorBlack xl:text-2xl">
                                        Amplifies PPC Success
                                    </div>
                                    <p>
                                        Make sure you optimize your PPC ads for both desktop and
                                        mobile search ads for focusing on desktop successfully.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center gap-[30px] px-4 text-center after:absolute after:left-full after:top-1/2 after:hidden after:h-[120px] after:w-px after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden xl:px-[30px] xl:after:block jos" data-jos_animation="fade-left" data-jos_delay="0.6" data-jos_once="1" data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_counter="1">
                                <Image
                                    src="/images/home_hero_banner.svg"
                                    alt="Description of the image"
                                    width="70"
                                    height="70"

                                />
                                <div>
                                    <div className="mb-[15px] text-xl font-semibold capitalize leading-[1.33] -tracking-[0.5px] text-ColorBlack xl:text-2xl">
                                        Builds Customer Trust
                                    </div>
                                    <p>
                                        Even with a strong SEO strategy, building customer trust
                                        in your brand takes time. Invest in quality content for
                                        readers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default SectionFeatures