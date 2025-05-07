'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { AuthButtons } from './auth-buttons'
import { Logo } from './logo'
import NavItems from './nav-items'

export default function Header() {
  const [addBorder, setAddBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setAddBorder(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 py-2 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container">
        <Logo />

        <div className="hidden lg:block">
          <div className="flex items-center">
            <nav className="mr-10">
              <NavItems />
            </nav>
            <AuthButtons />
          </div>
        </div>

        <div className="mt-2 cursor-pointer block lg:hidden">
          {/* drawer */}
        </div>
      </div>
      <hr
        className={cn(
          'absolute w-full bottom-0 transition-opacity duration-300 ease-in-out',
          addBorder ? 'opacity-100' : 'opacity-0'
        )}
      />
    </header>
  )
}
