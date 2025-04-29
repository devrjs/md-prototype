import { SiteHeader } from '@/components/global/site-header'
import { SidebarInset } from '@/components/ui/sidebar'

export default function Settings() {
  return (
    <SidebarInset>
      <SiteHeader />
      <h1>Settings</h1>
    </SidebarInset>
  )
}
