import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IconLogout, IconSettings } from '@tabler/icons-react'
import Link from 'next/link'
import { SignOut } from './sign-out'

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 pl-2 hover:bg-transparent"
        >
          <div className="flex flex-col text-start text-xs gap-1">
            <span className="text-sidebar-foreground font-medium">
              john doe
            </span>
            <span className="text-muted-foreground font-medium">
              email@example.com
            </span>
          </div>
          <Avatar className="size-10 rounded-md">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/124599?v=4"
              width={32}
              height={32}
              alt="Profile image"
            />
            <AvatarFallback className="rounded-md">US</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconSettings />
            <a href="/settings">Configurações</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
