import { SiteHeader } from '@/components/global/site-header'
import { Button } from '@/components/ui/button'
import { SidebarInset } from '@/components/ui/sidebar'
import { PackagePlus } from 'lucide-react'
import { OrderData } from './_components/order-data'
import { OrderImport } from './_components/order-import'

export default async function Orders() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="px-6 pt-4 flex justify-between gap-6 items-center">
          <OrderImport />
          <Button className="bg-emerald-500 hover:bg-emerald-400 cursor-pointer">
            <PackagePlus className="size-4" />
            Novo Pedido
          </Button>
        </div>
        <div className="@container/main flex flex-1 flex-col gap-2">
          <OrderData />
        </div>
      </div>
    </SidebarInset>
  )
}
