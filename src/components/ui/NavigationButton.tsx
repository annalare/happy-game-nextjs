"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

const buttonWrapperClass =
  "inline-flex flex-col items-center justify-center gap-1 rounded cursor-pointer outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const iconBoxClass =
  "inline-flex h-9 w-9 min-h-9 min-w-9 items-center justify-center rounded bg-transparent text-brand-purple-700 transition-colors hover:bg-brand-purple-100 [&_svg]:shrink-0";

export interface NavigationButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  icon: IconName;
  name: string;
}

const NavigationButton = React.forwardRef<
  HTMLAnchorElement,
  NavigationButtonProps
>(({ href, icon, name, className, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(buttonWrapperClass, className)}
      {...props}
    >
      <span className={iconBoxClass} aria-hidden>
        <Icon name={icon} size={20} />
      </span>
      <span className="text-xs font-normal text-text-primary">{name}</span>
    </Link>
  );
});

NavigationButton.displayName = "NavigationButton";

export { NavigationButton };
