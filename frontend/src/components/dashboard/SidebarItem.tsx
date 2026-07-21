"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  href,
  title,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition ",
        active
          ? "bg-purple-600 text-white"
          : "text-gray-600 hover:bg-purple-200",
      )}
    >
      <Icon size={20} />
      <span>{title}</span>
    </Link>
  );
}
