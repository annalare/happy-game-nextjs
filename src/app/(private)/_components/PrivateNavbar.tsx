"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Session } from "next-auth";

import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { NavigationButton } from "@/components/ui/NavigationButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const ROUTES = [
  { href: "/feed", icon: "Home" as const, name: "Feed" },
  { href: "/acervo", icon: "Gamepad2" as const, name: "Acervo" },
];

export interface PrivateNavbarProps {
  session: Session | null;
}

export function PrivateNavbar({ session }: PrivateNavbarProps) {
  const pathname = usePathname();
  const user = session?.user;

  return (
    <Navbar
      logo={
        <Link href="/feed" className="flex items-center">
          <Logo variant="black" size="lg" className="dark:hidden h-14 w-auto" />
          <Logo variant="white" size="lg" className="hidden dark:block h-14 w-auto" />
        </Link>
      }
      navItems={
        <>
          {ROUTES.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavigationButton
                key={item.href}
                href={item.href}
                icon={item.icon}
                name={item.name}
                className={cn(
                  "rounded-md transition-colors",
                  isActive &&
                    "bg-brand-purple-100 text-brand-purple-800 [&_span:first-child]:bg-brand-purple-100 [&_span:first-child]:text-brand-purple-800"
                )}
              />
            );
          })}
        </>
      }
      rightActions={
        <>
          <Button variant="secondary" size="large" asChild>
            <Link href="/perfil" className="flex items-center gap-2">
              <Avatar
                src={user?.image ?? undefined}
                alt={user?.name ?? ""}
                size={24}
                className="h-6 w-6"
              />
              <span className="truncate max-w-[120px]">
                {user?.name ?? "Perfil"}
              </span>
            </Link>
          </Button>
          <ThemeToggle />
        </>
      }
    />
  );
}
