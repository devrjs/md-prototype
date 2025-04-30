import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { OrderData } from './_components/order-data'

export default async function Order() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <OrderData />
        </div>
      </div>
    </SidebarInset>
  )
}
