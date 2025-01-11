import { Menu } from "lucide-react";
import UserIcon from "./UserIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOut from "./SignOut";
import { SignInButton, SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-teal-700 hover:bg-teal-600">
            <UserIcon />

            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button>Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>

            <DropdownMenuGroup>
              {links.map((link, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </SignedIn>


        </DropdownMenuContent>

      </DropdownMenu>
    </>
  );
};
export default DropdownListMenu;
