"use client"

import LogoutButton from "@/components/auth/logout-button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCurrentUser } from "@/hooks/use-current-user"
import { User, Goal, Settings2, ChartColumn, DoorOpen } from "lucide-react"
import { Session } from "next-auth"

type UserDropdownProps = {
  user: Session['user']
}

export default function UserDropdown({ user }: UserDropdownProps) {
  console.log(user)
  if (!user) return

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="relative h-8 items-center flex justify-between w-full space-x-2 !px-0">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1 flex-1 text-left">
            {user.name && (
              <p className="text-sm font-medium leading-none">{user.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="w-5 h-5 mr-3" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Goal className="w-5 h-5 mr-3" />
            Goals
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2 className="w-5 h-5 mr-3" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ChartColumn className="w-5 h-5 mr-3" />
            Progress
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem>
            <DoorOpen className="w-5 h-5 mr-3" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}