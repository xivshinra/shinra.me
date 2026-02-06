"use client";

// IMPORTS
import { usePathname } from "next/dist/client/components/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// COMPONENT
export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar variant="floating">
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/")}
              >
                <Link href="/">Accueil</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/portfolio")}
              >
                <Link href="/portfolio">Portfolio</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/services")}
              >
                <Link href="/services">Services & Tarifs</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={isActive("/blog")}
              >
                <Link href="/blog">Blog</Link>
              </SidebarMenuButton>
              <SidebarMenuBadge>New</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-muted-foreground italic">
          Updated by{" "}
          <a
            href="https://github.com/xivshinra"
            className="text-indigo-500"
          >
            Shinra
          </a>{" "}
          - 06/02/26
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
