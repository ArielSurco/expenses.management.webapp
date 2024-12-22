import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/shared/components/sidebar'
import { ROUTES } from '@/shared/constants/routes'

export function NavigationSidebar() {
  const sidebarItems = Object.values(ROUTES).filter((route) => route.sidebar !== null)

  return (
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.sidebar.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.path}>
                      <item.sidebar.icon />
                      <span>{item.sidebar.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
