import Link from 'next/link';
import React from 'react';
import Logo from './svg/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="section-footer">
            <div className="bg-[#101010]">
                <div className="max-w-7xl w-ful mx-auto">
                    {/* Footer Area Top */}
                    <div>
                        {/* Footer Top Spacing */}
                        <div className="pt-[60px] lg:pt-20 xl:pt-[100px]">
                            <div className="container-default">
                                <div className="flex flex-col items-center justify-between gap-x-10 gap-y-8 rounded-[5px] bg-primary text-white p-10 md:flex-row lg:gap-x-20 lg:p-[50px]">
                                    <div className="max-w-none md:max-w-[60%] lg:max-w-[62%] xl:max-w-[636px]">
                                        <h2 className="text-center text-white font-semibold md:text-left text-2xl">
                                            Are you ready to increase your SEO ranking?
                                        </h2>
                                    </div>
                                    <div>
                                        <a href="#" className="btn is-black is-large btn-animation group inline-block w-full rounded-[3px] border-2">
                                            <span>Let&apos;s Get Started</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Top Spacing */}
                    </div>
                    {/* Footer Area Top */}

                    {/* Footer Area Center */}
                    <div className="text-white">
                        {/* Footer Center Spacing */}
                        <div className="py-[60px] lg:py-20 xl:py-[100px]">
                            {/* Section Container */}
                            <div className="container-default">
                                {/* Footer Widget List */}
                                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                                    {/* Footer Widget Item */}
                                    <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                                        <Link href="/" className="text-xl font-bold text-gray-900">
                                            <Logo fill='#ffffff' />
                                        </Link>
                                        <div>
                                            {/* Footer About Text */}
                                            <div className="lg:max-w-[416px]">
                                                We are a strategic &amp; creative digital agency focused on user experience, mobile, social, data gathering, and promotional offerings.
                                            </div>
                                            {/* Footer Mail */}
                                            <a href="mailto:yourdemo@email.com" className="my-6 block underline-offset-4 transition-all duration-300 hover:underline">
                                                yourdemo@email.com
                                            </a>
                                            {/* Footer Social Links */}
                                            <div className="flex flex-wrap gap-5">
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]" aria-label="twitter">
                                                    <i className="fa-brands fa-x-twitter"></i>
                                                </a>
                                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]" aria-label="facebook">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]" aria-label="instagram">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#FDFBF9]/10 text-sm text-white transition-all duration-300 hover:bg-ColorAtomicTangerine hover:text-[#1B1C1D]" aria-label="github">
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            </div>
                                        </div>
                                        {/* Footer Content */}
                                    </div>
                                    {/* Footer Widget Item */}

                                    {/* Footer Widget Item */}
                                    <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                                        {/* Footer Widget Title */}
                                        <div className="text-xl font-semibold capitalize">
                                            Primary Pages
                                        </div>
                                        {/* Footer Navbar */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/">Home</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/about">About Us</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/services">Services</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/pricing">Pricing</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Footer Widget Item */}

                                    {/* Footer Widget Item */}
                                    <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                                        {/* Footer Title */}
                                        <div className="text-xl font-semibold capitalize">
                                            Utility Pages
                                        </div>
                                        {/* Footer Navbar */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/signup">Signup</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/login">Login</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/error-404">404 Not Found</a>
                                            </li>
                                            <li>
                                                <a className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline" href="/reset-password">Password Reset</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Footer Widget Item */}

                                    {/* Footer Widget Item */}
                                    <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                                        {/* Footer Title */}
                                        <div className="text-xl font-semibold capitalize">
                                            Resources
                                        </div>
                                        {/* Footer Navbar */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline">Support</a>
                                            </li>
                                            <li>
                                                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline">Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline">Strategic Finance</a>
                                            </li>
                                            <li>
                                                <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="hover:opcity-100 text-[#FDFBF9]/80 underline-offset-4 transition-all duration-300 ease-linear hover:underline">Video Guide</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Footer Widget Item */}
                                </div>
                                {/* Footer Widget List */}
                            </div>
                            {/* Section Container */}
                        </div>
                        {/* Footer Center Spacing */}
                    </div>
                    {/* Footer Area Center */}

                    <div className="horizontal-line bg-white"></div>

                    {/* Footer Area Bottom */}
                    <div>
                        {/* Footer Bottom Spacing */}
                        <div className="py-[18px]">
                            {/* Section Container */}
                            <div className="container-default">
                                <div className="text-center text-[#FDFBF9]/80">
                                    © Copyright 2024, All Rights Reserved by 7 Hertz Studio
                                </div>
                            </div>
                            {/* Section Container */}
                        </div>
                        {/* Footer Bottom Spacing */}
                    </div>
                </div>
                {/* Footer Area Bottom */}
            </div>
        </footer>
    );
}

export default Footer;
