import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'

export default function Products() {
  return (
    <SidebarInset className="bg-[#f1f5f9]">
      <SiteHeader />
      <h1>Products</h1>
    </SidebarInset>
  )
}
