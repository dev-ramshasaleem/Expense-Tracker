interface TransactionItemProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
}
