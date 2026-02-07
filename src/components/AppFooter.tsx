import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function AppFooter() {
  return (
    <div className="px-4 py-8 w-full max-w-360 mx-auto flex items-center gap-4 justify-center text-muted-foreground text-sm">
      <Avatar>
        <AvatarImage src="/assets/wm-logo.jpg" />
      </Avatar>
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-600 dark:text-indigo-400">Shinra.me</span>.
        All rights reserved.
      </p>
    </div>
  );
}
