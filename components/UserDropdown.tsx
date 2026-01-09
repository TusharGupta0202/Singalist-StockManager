'use client'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push('/sign-in');
    }

    const user = { name: "John Doe" , email: "john.doe@example.com"};
  
    return (

    <DropdownMenu >
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-400 hover:text-yellow-500">
                <Avatar className="w-8 h-8 bg-yellow-500 rounded-full">
                    {/* <AvatarImage src="" /> */}
                    <AvatarFallback className="text-xl font-bold text-yellow-900 bg-yellow-500">
                        {user.name.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-col items-start hidden md:flex">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400">
            <DropdownMenuLabel >
                <div className="relative flex items-center gap-3 py-2">
                    <Avatar className="w-8 h-8 bg-yellow-500 rounded-full">
                        {/* <AvatarImage src="" /> */}
                        <AvatarFallback className="ml-3 text-xl font-bold text-yellow-900 bg-yellow-500">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                        <span className="text-sm text-gray-500">{user.email}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600"/>
            <DropdownMenuItem onClick={handleSignOut} className="font-medium text-gray-100 transition-colors cursor-pointer text-md focus:bg-transparent focus:text-yellow-500">
                <LogOut className="hidden w-4 h-4 mr-2 sm:block" />
                Logout
            </DropdownMenuItem>
            <DropdownMenuSeparator className="hidden bg-gray-600 sm:block"/>
            <nav className="sm:hidden">
                <NavItems />
            </nav>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown