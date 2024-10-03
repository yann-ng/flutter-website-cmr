import Link from 'next/link'
import Image from 'next/image'
import LandingStat from "./LandingStat"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import img1 from '../public/images/1.jpeg'
import img2 from '../public/images/2.jpeg'
import img3 from '../public/images/3.jpeg'
import img4 from '../public/images/4.jpeg'

function Landing(){
    const carouselImages = [img1, img2, img3, img4]

    const options = {
        arrows: false,
            autoplay: true,
            interval: '1600',
        rewind: 'true'
  };
    return(
        <section className="w-11/12 mx-auto flex flex-col relative
            xsm:h-[800px] xsm:flex-row xsm:items-center xsm:justify-center
            lg:w-4/5">
            <div className="w-full mt-32 xsm:hidden">
                <Splide options={options} className="h-full w-full">
                    {carouselImages.map( ( slide, index ) => (
                        <SplideSlide key={ index }>
                            <div className="w-full h-[400px] relative rounded-[60px] overflow-hidden bg-brand">
                                <Image src={slide} alt="image 1" layout="fill" objectFit="cover"/>
                            </div>
                        </SplideSlide>
                        ) ) }
                </Splide>
            </div>
            {/* Left side */}
            <div className="w-full space-y-4 
                lg:w-[55%]">
                <h1 className="text-4xl font-bold mt-8 xsm:mt-0 xsm:text-6xl">A community open to everyone</h1>
                <p className="leading-tight font-medium opacity-60 ">Flutter Cameroon is an initiative to focus the efforts of many 
                    developers in and around Cameroon to learn, shate and become 
                    produtive using Flutter.
                </p>
                <div className="gap-2 w-full grid grid-rows-2 text-center
                    xsm:grid-rows-1 xsm:grid-cols-2 xsm:w-fit xsm:text-left">
                    <Link href="#">
                        <a className="bg-brand text-white p-2 rounded-md hover:opacity-80">Join the 237community</a></Link>
                    <Link href="#">
                        <a className="border-2 border-brand text-brand font-medium p-2 rounded-md hover:bg-brand-light
                                    xsm:w-fit">Visit forum</a>
                    </Link>
                </div>
                <div className="space-x-4 flex xsm:absolute xsm:left-0 xsm:bottom-8">
                    <LandingStat number="106k" title="Members on Meetup" />
                    <LandingStat number="127k" title="Stars on Github" />
                    <LandingStat number="151.4k" title="Followers on Twitter" />
                </div>
            </div>
            {/* Right side */}
            <div className="hidden 
                lg:w-[45%] lg:flex lg:items-center lg:justify-end lg:space-x-2 ">
                <div className="w-1/4 h-[400px] relative rounded-full overflow-hidden bg-brand">
                    <Image src={img1} alt="image 1" layout="fill" objectFit="cover"/>
                </div>
                <div className="w-1/4 h-[800px] space-y-2">
                    <div className="w-full h-1/2 relative rounded-full overflow-hidden bg-brand">
                        <Image src={img2} alt="image 2" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-full h-1/2 relative rounded-full overflow-hidden bg-brand">
                        <Image src={img3} alt="image 3" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="w-1/4 h-[400px] relative rounded-full overflow-hidden bg-brand">
                    <Image src={img4} alt="image 4" layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
    )
}

export default Landing