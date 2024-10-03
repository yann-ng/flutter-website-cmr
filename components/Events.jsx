import Link from 'next/link'

import EventsCard from './EventsCard'

import imgEvent1 from '../public/images/21.png'
import imgEvent2 from '../public/images/22.png'
import imgEvent3 from '../public/images/24.png'
import imgEvent4 from '../public/images/23.png'


function Events(){
    return(
        <section className="w-11/12 mx-auto mt-24 
            lg:w-4/5">
            <h2 className="text-6xl font-bold">Community events</h2>
            <p className="opacity-80 text-lg lg:w-4/6 mt-2">Find out about all the virtual and physical events organized by the different communities in each city. 
                Attend events hosted by the global Flutter community and continue to learn more about Flutter.
            </p>
            <div className="my-8">
                <div className="flex flex-col space-y-4
                    sm:space-x-4 sm:space-y-0 sm:flex-row">
                    <div className="w-full sm:w-1/2 group">
                        <EventsCard image={imgEvent1} title="Flutter at Google I/O 2022" detail="Dig into Flutter's announcements from I/O, including Flutter 3."/>
                    </div>
                    <div className="w-full pt-0 sm:w-1/2 sm:pt-4 group">
                        <EventsCard image={imgEvent2} title="FlutterFestival Cameroon" detail="Today is the big day of our #FlutterFestival Cameroon. 
                                We expect you massively between 13h and 17h at @ActivSpaces Douala."/>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 mt-4
                    sm:space-x-4 sm:space-y-0 sm:flex-row">
                    <div className="w-full sm:w-1/3 group">
                        <EventsCard image={imgEvent3} title="Flutter Update: App Monetization" detail="Watch Flutter UPdate to get the latest news
                                about updates to out monetization features."/>
                    </div>
                    <div className="w-full sm:w-2/3 group">
                        <EventsCard image={imgEvent4} title="Flutter Interact 2019" detail="Watch Keynotes and Sessions from Flutter Interract in 2019 and check out the photo gallery to see who was there!"/>
                    </div>
                </div>
            </div>
            <Link href="#">
                <a className="p-2 px-12 text-brand rounded-md border-2 border-brand bg-brand-light font-medium hover:bg-white">See all events</a>    
            </Link>

        </section>
    )
}

export default Events