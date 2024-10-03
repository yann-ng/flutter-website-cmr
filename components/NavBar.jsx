import NavBarLarge from "./NavBarLarge"
import NavBarMobile from "./NavBarMobile"

function NavBar({DisplayMobileMenu}){
    return( 
        <nav className="w-full border-b-2 border-gray-100 fixed top-0 z-40 bg-white max-w-[1600px]">
            <NavBarLarge />
            <NavBarMobile DisplayMobileMenu={DisplayMobileMenu}/>
        </nav>
    )
}

export default NavBar