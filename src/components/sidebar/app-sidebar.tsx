'use client'

import type * as React from 'react'

import { NavBottomItems } from '@/components/sidebar/nav-bottom-items'
import { NavUser } from '@/components/sidebar/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { IconInnerShadowTop } from '@tabler/icons-react'
import { sidebarItems } from './config/sidebar-items'
import { NavItems } from './nav-items'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">MD Sistema</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavItems
          title="Cadastros Básicos"
          items={sidebarItems.basicRegistration}
        />
        <NavItems title="Vendas" items={sidebarItems.sales} />
        <NavItems
          title="Gerenciamento de Envios"
          items={sidebarItems.shipments}
        />
        <NavBottomItems
          items={sidebarItems.navBottomItems}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarItems.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
