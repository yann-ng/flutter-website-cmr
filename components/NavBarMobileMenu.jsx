import Image from 'next/image'

import searchIcon from '../public/images/29.svg'
import { RxCross2 } from 'react-icons/rx'

function NavBarMobileMenu({DisplayMobileMenu}){
    return(
        <div className='bg-black bg-opacity-50 h-full w-full absolute right-0 top-0 flex justify-end z-50'>
            <div className='bg-white h-full w-4/5 py-6 fixed'>
                <div className='border-b-2 border-gray-100 flex justify-end align-center items-center pb-5 px-4'>
                    <div className="flex justify-center items-center bg-brand-light p-2 rounded-full border-2 border-green-100 hover:cursor-pointer hover:border-brand">
                        <Image src={searchIcon} alt="Search icon" />
                    </div>
                    <RxCross2 className="ml-2 text-3xl cursor-pointer hover:text-brand" onClick={DisplayMobileMenu}/>
                </div>
                <div className='flex flex-col gap-y-4 text-lg font-medium text-center pt-8 px-8'>
                    <a href="#" className="hover:text-brand">Events</a>
                    <a href="#" className="hover:text-brand">Forum</a>
                    <a href="#" className="hover:text-brand">Articles</a>
                    <a href="#" className="hover:text-brand">Podcasts</a>
                    <a href="#" className="hover:text-brand">Jobs</a>
                </div>
                <div className='w-full flex flex-col justify-center text-center mt-8 px-8 gap-y-2'>
                    <a href="#" className="p-2 px-4 bg-brand border-2 border-brand text-white rounded-md hover:opacity-90">Login</a>
                    <a href="#" className="text-brand py-2 px-4 border-2 border-brand rounded-md hover:bg-brand-light">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default NavBarMobileMenu