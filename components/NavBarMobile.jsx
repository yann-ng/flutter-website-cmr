import Image from 'next/image'

import logo from '../public/images/9.svg'
import searchIcon from '../public/images/29.svg'
import { FiMenu } from 'react-icons/fi'


function NavBarMobile({DisplayMobileMenu}){
    return(
    <div className="w-11/12 py-4 mx-auto flex justify-between items-center lg:hidden">
        <a href="#"><Image src={logo} alt="logo" /></a>
        <div className="flex justify-center items-center">
            {/* <div className="flex justify-center items-center bg-brand-light p-2 rounded-full border-2 border-green-100 hover:cursor-pointer hover:border-brand">
                <Image src={searchIcon} alt="Search icon" />
            </div> */}
            <FiMenu className="ml-2 text-3xl cursor-pointer hover:text-brand" onClick={DisplayMobileMenu}/>
        </div>
        
        
    </div>
    )
}

export default NavBarMobile