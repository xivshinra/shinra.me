// IMPORTS
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface DemoCtaProps {
  className?: string;
  link: string;
  textBtn: string;
  text: string;
  isBlank?: boolean;
}

// COMPONENT
export default function DemoCta({
  className,
  link,
  textBtn,
  text,
  isBlank = false,
}: DemoCtaProps) {
  return (
    <div className={cn("border-l-4 pl-4 border-primary", className)}>
      <p className="text-muted-foreground italic">{text}</p>
      <Button
        asChild
        size="sm"
        className="rounded-xs px-6 font-exo2"
      >
        <Link
          href={link}
          className="no-underline"
          target={isBlank ? "_blank" : "_self"}
        >
          {textBtn}
        </Link>
      </Button>
    </div>
  );
}
