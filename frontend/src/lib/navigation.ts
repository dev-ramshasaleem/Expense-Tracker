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
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: Tags,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: ChartColumn,
  },
  
  
];