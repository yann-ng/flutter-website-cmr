import Link from 'next/link'

import ArticlesCard from './ArticlesCard'
import cardImg1 from '../public/images/20.png'
import cardImg2 from '../public/images/18.png'
import cardImg3 from '../public/images/19.png'
import cardImg4 from '../public/images/17.png'

function Articles(){
    return(
        <section className="w-11/12 mx-auto mt-24
            lg:w-4/5">
            <h2 className="text-6xl font-bold">Discover popular 
                <span className="before:content-['\a'] whitespace-pre">articles</span></h2>
            <p className="opacity-80 text-lg lg:w-4/6">These articles review the latest news about the framework, but also feedback on our business.
                Discover the most popular articles shared by members of the community.
            </p>
            <div className="w-full flex flex-col my-8 space-y-2 
                sm:flex-row sm:h-[440px] sm:space-x-2 sm:space-y-0">
                <div className="w-full h-[400px] sm:w-1/3 sm:h-full">
                    <ArticlesCard title={"Introducing Flutter in Focus!123"} image={cardImg1} />
                </div>
                <div className="w-full sm:w-1/3 sm:h-full space-y-2">
                    <div className="h-[400px] sm:h-1/2">
                        <ArticlesCard title={"Flutter 3 is available 🔥🔥"} image={cardImg2} />
                    </div>
                    <div className="h-[400px] sm:h-1/2">
                        <ArticlesCard title={"Flutter Apprentice Giveaway"} image={cardImg3} />
                    </div>
                </div>
                <div className="h-[400px] sm:w-1/3 sm:h-full" >
                    <ArticlesCard title={"How to Create Stateless Widgets - Flutter Widgets 101 Ep.1"} image={cardImg4} />
                </div>
        </div>
            <Link href="#">
                <p className="w-full text-center p-2 px-4 mr-4 bg-brand text-white rounded-md hover:opacity-90 cursor-pointer
                sm:w-fit">See all articles</p>    
            </Link>
        </section>
    )
}

export default Articles