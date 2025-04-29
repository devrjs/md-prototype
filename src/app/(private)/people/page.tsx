import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'

export default function People() {
  return (
    <SidebarInset className="bg-[#f1f5f9]">
      <SiteHeader />
      <h1>People</h1>
    </SidebarInset>
  )
}
