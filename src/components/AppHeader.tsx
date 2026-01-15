// IMPORTS

import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

// COMPONENT
export default function AppHeader() {
  return (
    <div className="py-4 flex items-center gap-2">
      <SidebarTrigger />
      <ModeToggle />
      <pre className="text-muted-foreground">shinra.me</pre>
    </div>
  );
}
