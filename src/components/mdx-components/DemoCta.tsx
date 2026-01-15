// IMPORTS
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface DemoCtaProps {
  className?: string;
  link: string;
  text: string;
}

// COMPONENT
export default function DemoCta({ className, link, text }: DemoCtaProps) {
  return (
    <div className={cn("border-l-4 pl-4 border-indigo-500", className)}>
      <p className="text-muted-foreground italic">You want to see more ?</p>
      <Button asChild>
        <a
          href={link}
          className="no-underline"
          target="_blank"
        >
          {text}
        </a>
      </Button>
    </div>
  );
}
