'use client'

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
import { getUsersProfile } from '@/http/kubb'
import { IconSettings } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../ui/skeleton'
import { SignOut } from './sign-out'

export default function UserDropdown() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await getUsersProfile(),
    staleTime: 1000 * 60 * 60, // Cache data for 1 hour
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 pl-2 hover:bg-transparent"
        >
          <div className="flex flex-col gap-1 text-start text-xs">
            {isLoadingProfile ? (
              <>
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-28" />
              </>
            ) : (
              <>
                <span className="font-medium text-sidebar-foreground">
                  {profile?.name}
                </span>
                <span className="font-medium text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
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
