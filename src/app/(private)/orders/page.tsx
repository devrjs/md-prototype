import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { getOrders } from '@/http/kubb'

export default async function Order() {
  const data = await getOrders()

  return (
    <SidebarInset>
      <SiteHeader />
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </SidebarInset>
  )
}
