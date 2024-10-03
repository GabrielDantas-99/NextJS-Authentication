'use client'

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain
} from "@/components/general/sidebar";
import { Dumbbell, Settings2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

type MainSidebarProps = {
  user: Session['user']
}

export default function MainSidebar({ user }: MainSidebarProps) {

  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Image src={"/logo.png"} width={200} height={80} alt={"Logo"} />
      </SidebarHeader>
      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink
              href="/dashboard"
              active={isActive('/dashboard')}
            >
              <Dumbbell />
              Dashboard
            </SidebarNavLink>
            <SidebarNavLink
              href="/settings"
              active={isActive('/settings')}
            >
              <Settings2 />
              Settings
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>
              Extra links
            </SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Need help?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <UserDropdown user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}