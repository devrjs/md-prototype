'use client'

import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import UserDropdown from './user-dropdown'

const ptBrPathNames: Record<string, string> = {
  Orders: 'Pedidos',
  People: 'Pessoas',
  Products: 'Produtos',
  Settings: 'Configurações',
  Shipments: 'Controle de Envios',
}

export function SiteHeader() {
  const pathname = usePathname()

  const pathSegments = pathname
    .split('/')
    .filter(Boolean)
    .map(segment => {
      const capitalizedSegment =
        segment.charAt(0).toUpperCase() + segment.slice(1)
      return ptBrPathNames[capitalizedSegment] || capitalizedSegment
    })

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className='font-medium text-base'>{pathSegments[0]}</h1>
      </div>
      <div className='flex h-full items-center gap-2 border-l pr-2'>
        <UserDropdown />
      </div>
    </header>
  )
}
