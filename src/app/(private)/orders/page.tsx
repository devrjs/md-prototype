import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { getOrders } from '@/http/kubb'
import data from '../dashboard/data.json'
import { DataTable } from './_components/data-table'

export default async function Order() {
  const { orders } = await getOrders()

  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={orders} />
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
