import Image from 'next/image'

import imgFooter1 from '../public/images/12.svg'
import imgFooter2 from '../public/images/25.svg'
import imgFooter3 from '../public/images/27.svg'
import imgFooter4 from '../public/images/10.svg'
import imgFooter5 from '../public/images/26.svg'
import imgFooter6 from '../public/images/28.svg'
import imgFooter7 from '../public/images/30.svg'


function Footer(){
    return(
        <footer className="w-11/12 mx-auto mt-8 lg:w-4/5 ">
            <div className="flex flex-col p-4 gap-x-4 gap-y-4 bg-gray-100 rounded-2xl rounded-b-none
                xsm:flex-row xsm:flex-wrap xsm:justify-between
                md:flex-nowrap">
                <div className="md:w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Resources</h3>
                    <p className="opacity-80 cursor-pointer">Become a Sponsor</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Call for Speakers</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">About</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Podcasts</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Jobs</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Branding</p>
                    <div className="bg-black flex space-x-2 rounded-md p-2 mt-2 w-fit cursor-pointer"><img src={imgFooter1.src} alt="Flag icon" className="w-auto h-6" /><span className="text-white"> English</span></div>
                </div>
                <div className="md:w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Learn Flutter</h3>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Learning Journey</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">codelabs</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Samples</p>
                </div>
                <div className="md:w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Legal</h3>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Terms and services</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Code of conduct</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">FAQ</p>
                </div>
                <div className="md:w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
                    <p className="opacity-80">Join our newsletter to receive tutorials, articles and podcasts on web design and programming.</p>
                    <form className="flex flex-col w-full mt-4 gap-x-2 gap-y-2
                        xsm:flex-row">
                        <input type="text" placeholder="Your email address" className="p-2 w-full rounded-md border-2 border-gray-200 outline-none
                                                                                xsm:w-[calc(100%-80px)]"/>
                        <input type="submit" value="Sign up" className="p-2 w-full bg-brand text-white rounded-md cursor-pointer hover:bg-none hover:opacity-80
                                                                                xsm:w-20" />
                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-x-2 gap-y-2 bg-gray-100 rounded-b-2xl px-4 pb-4
                xsm:flex-row">
                <div className="w-full p-2 flex items-center justify-center font-medium space-x-2 bg-white rounded-md cursor-pointer border-2 border-gray-100 hover:border-brand
                    md:w-fit">
                    <Image src={imgFooter2} alt="Slack logo"/>
                    <span>Slack</span>
                </div>
                <div className="w-full p-2 flex items-center justify-center font-medium space-x-2 bg-white rounded-md cursor-pointer border-2 border-gray-100 hover:border-brand
                    md:w-fit">
                    <Image src={imgFooter3} alt="Telegram logo" />
                    <span>Telegram</span>
                </div>
            </div>
            <hr className="mt-4 w-full border border-gray-200" />
            <div className="mt-4 flex flex-col text-center md:justify-between mb-4 md:flex-row">
                <p className="font-medium">&copy; 2022-2023 Flutter Cameroun. All rights reserve Design by
                    <a href="#" className="hover:text-brand"> MBAGNA Johan</a>
                </p>
                <div className='space-x-2 mt-2 md:mt-0'>
                    <a href="#"><Image src={imgFooter4} alt="Github icon" /></a>
                    <a href="#"><Image src={imgFooter5} alt="Telegram icon" /></a>
                    <a href="#"><Image src={imgFooter6} alt="twitter icon" /></a>
                    <a href="#"><Image src={imgFooter7} alt="x icon" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer