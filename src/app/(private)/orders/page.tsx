import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { TableData } from './_components/table-data'

export default async function Orders() {
  return (
    <SidebarInset>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <TableData />
        </div>
      </div>
    </SidebarInset>
  )
}
