import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { getCustomers } from '@/http/kubb'
import { DataTable } from './_components/data-table'

export default async function People() {
  const customers = await getCustomers()

  return (
    <SidebarInset className="bg-[#f1f5f9]">
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={customers} />
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
