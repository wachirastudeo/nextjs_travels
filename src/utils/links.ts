
interface DropdownListMenu { 
    label: string, 
    href: string 
  }
  
  export const links: DropdownListMenu[] = [
    {
      label: "Home",
      href: "/"
    }, {
      label: "Profile",
      href: "/profile"
    },
    {
      label: "Favorites",
      href: "/favorites"
    },
    {
      label: "Landmark",
      href: "/camp"
    },
    {
      label: "Create Landmark",
      href: "/camp/create"
    }
  ]
