import { Menu } from "lucide-react";
import UserIcon from "./UserIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const DropdownListMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        <UserIcon  />
        <Menu />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
        </DropdownMenuItem>
      
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
     
      <DropdownMenuItem>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
};
export default DropdownListMenu;
