"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  logo: React.ReactNode;
  navItems: React.ReactNode;
  rightActions: React.ReactNode;
  mobileRightActions?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Navbar({
  logo,
  navItems,
  rightActions,
  mobileRightActions,
  className,
  containerClassName,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 md:h-20 w-full items-center border-b border-border-primary bg-bg-primary",
        className
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between gap-4 px-4 md:px-6",
          containerClassName
        )}
      >
        <div className="flex shrink-0 items-center">{logo}</div>

        <nav
          className={cn(
            "flex flex-1 items-center justify-center gap-2",
            mobileRightActions != null && "hidden md:flex"
          )}
          aria-label="Navegação principal"
        >
          {navItems}
        </nav>

        <div
          className={cn(
            "shrink-0 items-center gap-2",
            mobileRightActions != null ? "hidden md:flex" : "flex"
          )}
        >
          {rightActions}
        </div>

        {mobileRightActions != null && (
          <div className="flex md:hidden shrink-0 items-center gap-2">
            {mobileRightActions}
          </div>
        )}
      </div>
    </header>
  );
}
