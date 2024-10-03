import Link from 'next/link'
import Image from 'next/image'

import imgPartner1 from '../public/images/14.svg'
import imgPartner2 from '../public/images/15.svg'
import imgPartner3 from '../public/images/8.svg'
import imgPartner4 from '../public/images/16.svg'
import imgPartner5 from '../public/images/5.svg'
import imgPartner6 from '../public/images/datk.png'

function Partners(){
    return(
        <section className="mt-8 w-11/12 mx-auto p-4 lg:p-8 bg-black text-white rounded-3xl flex flex-col
            lg:w-4/5 lg:flex-row lg:mt-12">
            <div className="w-full lg:pr-4 lg:w-3/4">
                <h2 className="text-3xl font-semibold">Partners</h2>
                <p className="opacity-80 mb-8">A very big thank you to all our partners for their continued partnership.
                    If you are interested in being showcased throughout Flutter Cameroon, 
                    contact <span className="text-brand-yellow">sponsor@fluttercm.dev</span> to discuss sponshorship opportunities.
                </p>
                <Link href="#">
                    <p className="flex justify-center p-2 text-brand-yellow border-2 border-brand-yellow rounded-md cursor-pointer
                        hover:bg-brand-yellow hover:text-black
                        sm:w-fit">Become a partner</p>
                </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 lg:w-1/4 lg:flex-col lg:justify-between ">  
                <div className="flex justify-between gap-x-4">
                    <Image src={imgPartner1} alt="logo like concept" />
                    <Image src={imgPartner2} alt="logo laravel cameroon" />
                </div>
                <div className="flex justify-around lg:-mt-4 gap-x-4">
                    <Image src={imgPartner3} alt="logo" />
                    <Image src={imgPartner4} alt="logo" />
                </div>
                <div className="flex justify-between items-center lg:mt-2 gap-x-4">
                    <a href="https:www.instagram.com/datk.creative"><img src={imgPartner6.src} className="w-auto h-8" alt="logo datk Creative. Instagram and Facebook @datk.creative" /></a>
                    {/* <div className="h-20 w-auto bg-blue-800 relative overflow-hidden">
                    </div> */}
                    <Image src={imgPartner5} alt="logo GDGDouala" />
                </div>
            </div>
        </section>
    )
}

export default Partners