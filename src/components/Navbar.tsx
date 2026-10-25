"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <nav className="relative mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-4 md:px-8">
        {/* Left: main nav links */}
        <ul className="flex items-center gap-4 text-[15px] font-semibold md:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-brand",
                    isActive ? "text-brand" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Center: logo (always centered regardless of side widths) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
          aria-label="Wanderlast home"
        >
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlast"
            width={140}
            height={22}
            className="h-5 w-auto md:h-[22px]"
            priority
          />
        </Link>

        {/* Right: account links */}
        <div className="flex items-center gap-4 text-[15px] font-semibold md:gap-6">
          <Link
            href="/profile"
            className="flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-brand"
          >
            <User className="size-4" aria-hidden />
            Profile
          </Link>
          <Link
            href="/login"
            className="text-foreground/80 transition-colors hover:text-brand"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-foreground/80 transition-colors hover:text-brand"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
