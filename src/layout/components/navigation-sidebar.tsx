import { MdLogout } from 'react-icons/md'

import { SignOutButton } from '@/auth/components/sign-out-button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SignOutButton>
              <MdLogout />
              Sign Out
            </SignOutButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
