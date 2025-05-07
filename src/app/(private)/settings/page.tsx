'use client'

import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { ShopeeConnection } from './_components/shopee-connection'

export default function Settings() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className='mt-4 flex flex-1 flex-col gap-4 p-4 pt-0'>
        <h2 className="font-bold text-xl">Integrações</h2>
        <ShopeeConnection />
      </div>
    </SidebarInset>
  )
}
