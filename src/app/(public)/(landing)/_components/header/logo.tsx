'use client'

import { Icons } from '@/components/global/icons'
import Link from 'next/link'
import { siteConfig } from '../site-config'

export function Logo() {
  return (
    <Link
      href="/"
      title="brand-logo"
      className="relative mr-6 flex items-center space-x-2"
    >
      <Icons.logo className="w-auto h-[40px]" />
      <span className="font-bold text-xl">{siteConfig.name}</span>
    </Link>
  )
}
