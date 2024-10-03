import Image from 'next/image'
import logo from '../public/images/9.svg'
import searchIcon from '../public/images/29.svg'


function NavBarLarge(){
    return(
        <div className=" hidden w-4/5 py-4 mx-auto lg:flex justify-between items-center ">
            <a href="#"><Image src={logo} alt="Logo Icon" /></a>
            <div className="flex items-center space-x-4 text-lg font-medium">
                <a href="#" className="hover:text-brand">Events</a>
                <a href="#" className="hover:text-brand">Forum</a>
                <a href="#" className="hover:text-brand">Articles</a>
                <a href="#" className="hover:text-brand">Podcasts</a>
                <a href="#" className="hover:text-brand">Jobs</a>
                <div className="flex items-center border-l-2 border-gray-200 pl-4 text-base">
                    <div className="flex justify-center items-center mr-8 bg-brand-light p-2 rounded-full border-2 border-green-100 hover:cursor-pointer hover:border-brand">
                        <Image src={searchIcon} alt="Search Icon" />
                    </div>
                    <a href="#" className="p-2 px-4 mr-4 bg-brand border-2 border-brand text-white rounded-md hover:opacity-90">Login</a>
                    <a href="#" className="text-brand py-2 px-4 border-2 border-brand rounded-md hover:bg-brand-light">Sign up</a>
                </div>
            </div>
        </div>
    );

}

export default NavBarLarge