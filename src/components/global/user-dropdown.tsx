import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { IconSettings } from '@tabler/icons-react'
import { SignOut } from './sign-out'

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 pl-2 hover:bg-transparent focus-visible:ring-0 cursor-pointer"
        >
          <div className="flex flex-col gap-1 text-start text-xs">
            <span className="font-medium text-sidebar-foreground">
              john doe
            </span>
            <span className="font-medium text-muted-foreground">
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
