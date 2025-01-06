import { Darkmode } from "./DarkMode"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"
import Search from "./Search"   


const Navbar = () => {
  return (
    <nav>
            <div className="flex flex-col sm:flex-row p-4 gap-4 items-center justify-between">
                {/* logo */}
                <Logo />
                {/* search  */}
                <Search  />
                
                {/* menu */}

                    <div className="flex gap-4">
                        <Darkmode />
                      <DropdownListMenu />

                    </div>
                
                
            </div>
    </nav>
  )
}
export default Navbar