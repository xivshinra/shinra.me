// IMPORTS

import { ModeToggle } from "./ModeToggle";
import { AppBreadcrumb } from "@/components/ui/AppBreadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

// COMPONENT
export default function AppHeader() {
  return (
    <div className="py-4 flex items-center gap-2 mb-4">
      <SidebarTrigger />
      <ModeToggle />
      <AppBreadcrumb />
    </div>
  );
}
