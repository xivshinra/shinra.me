// IMPORTS
import { ModeToggle } from "./ModeToggle";
import { AppBreadcrumb } from "@/components/ui/AppBreadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

// COMPONENT
export default function AppHeader() {
  return (
    <>
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <AppBreadcrumb />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            asChild
            className="bg-linear-to-br from-indigo-500 to-violet-700"
            size="sm"
          >
            <Link href="/contact">
              <Mail />
              Devis gratuit
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
