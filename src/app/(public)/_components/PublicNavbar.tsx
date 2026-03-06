"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Icon } from "@/components/ui/Icon";

const ROUTES = [
  { href: "/", label: "Início" },
  { href: "/historia", label: "História" },
  { href: "/plataforma", label: "Plataforma" },
];

export function PublicNavbar() {
  const pathname = usePathname();

  return (
    <Navbar
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-primary-green-darker-1 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50",
        "dark:border-b dark:border-border"
      )}
      containerClassName="container mx-auto p-4 md:p-6"
      logo={
        <Link href="/">
          <Logo variant="black" className="dark:hidden" />
          <Logo variant="white" className="hidden dark:block" />
        </Link>
      }
      navItems={
        <ul className="flex items-center gap-4">
          {ROUTES.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-3 rounded transition-colors font-medium",
                    isActive
                      ? "bg-primary-green-darker-2 dark:bg-primary-green-darker-2/30 text-primary-green-base"
                      : "hover:bg-primary-green-base dark:hover:bg-gray-500/15 dark:text-gray-300 text-gray-900 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      }
      rightActions={
        <>
          <Button size="large" variant="default" asChild>
            <Link href="/cadastro">Inscreva-se</Link>
          </Button>
          <ThemeToggle />
        </>
      }
      mobileRightActions={
        <>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="tertiary"
                size="medium"
                className="h-9 w-9 min-h-9 min-w-9 p-2 border border-border-primary"
                aria-label="Abrir menu"
              >
                <Icon name="Menu" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-bg-primary dark:bg-bg-primary"
            >
              <nav className="flex flex-col items-center gap-6 mt-8">
                {ROUTES.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "w-full text-center px-4 py-3 rounded transition-colors text-lg",
                        isActive
                          ? "bg-primary-green-darker-2 dark:bg-primary-green-darker-2 text-neutral-50"
                          : "hover:bg-bg-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button variant="default" className="w-full" asChild>
                  <Link href="/cadastro">Inscreva-se</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </>
      }
    />
  );
}
