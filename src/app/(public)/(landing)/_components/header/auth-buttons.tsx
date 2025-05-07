'use client'

import { Icons } from '@/components/global/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function AuthButtons() {
  return (
    <div className="gap-2 flex">
      <Link href="/login" className={buttonVariants({ variant: 'outline' })}>
        Login
      </Link>
      <Link
        href="/signup"
        className={cn(
          buttonVariants({ variant: 'default' }),
          'w-full sm:w-auto text-background flex gap-2'
        )}
      >
        <Icons.logo className="h-6 w-6" />
        Get Started for Free
      </Link>
    </div>
  )
}
