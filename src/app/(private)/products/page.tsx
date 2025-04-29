import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'
import { getProducts } from '@/http/kubb'

export default async function Products() {
  const products = await getProducts()

  return (
    <SidebarInset className="bg-[#f1f5f9]">
      <SiteHeader />
      {JSON.stringify(products, null, 2)}
    </SidebarInset>
  )
}
