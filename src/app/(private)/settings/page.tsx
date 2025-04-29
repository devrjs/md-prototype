import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'

export default function Settings() {
  return (
    <SidebarInset className="bg-[#f1f5f9]">
      <SiteHeader />
      <h1>Settings</h1>
    </SidebarInset>
  )
}
