import {
  LayoutDashboard,
  ReceiptText,
  Tags,
  ChartColumn,
  Settings,
} from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Expenses",
    href: "/dashboard/expenses",
    icon: ReceiptText,
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: Tags,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: ChartColumn,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];