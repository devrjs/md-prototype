'use client'

import { IconLogout } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export function SignOut() {
  const router = useRouter()

  function handleLogout() {
    document.cookie =
      'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    router.push('/sign-in')
  }

  return (
    <DropdownMenuItem variant="destructive" onClick={() => handleLogout()}>
      <IconLogout />
      Sair
    </DropdownMenuItem>
  )
}
