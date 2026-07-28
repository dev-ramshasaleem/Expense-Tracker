"use client";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";
import { api } from "@/src/lib/axios";
import SummaryCards from "@/src/components/reports/SummaryCards";
import CategoryBreakdown from "@/src/components/reports/CategoryBreakdown";
import Insights from "@/src/components/reports/Insights";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export interface ReportData {
  summary: {
    totalIncome: number;
    totalExpense: number;
    savings: number;
  };
  totalTransactions: number;
  averageExpense: number;
  highestCategory: string;
  categoryBreakdown: {
    category: string;
    _sum: {
      amount: number | null;
    };
  }[];
}

export default function ReportsPage() {
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const downloadReport = () => {
    if (!report) return;

    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text("Spendo Financial Report", 14, 20);

    // Date
    doc.setFontSize(11);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 30);

    // Summary
    autoTable(doc, {
      startY: 40,
      head: [["Summary", "Amount"]],
      body: [
        ["Total Income", `Rs ${report.summary.totalIncome.toLocaleString()}`],
        [
          "Total Expenses",
          `Rs ${report.summary.totalExpense.toLocaleString()}`,
        ],
        ["Net Savings", `Rs ${report.summary.savings.toLocaleString()}`],
      ],
    });

    // Category Breakdown
    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 10,
      head: [["Category", "Amount"]],
      body: report.categoryBreakdown.map((item) => [
        item.category,
        `Rs ${(item._sum.amount ?? 0).toLocaleString()}`,
      ]),
    });

    // Insights
    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 10,
      head: [["Insights", "Value"]],
      body: [
        ["Highest Category", report.highestCategory],
        ["Total Transactions", report.totalTransactions.toString()],
        ["Average Expense", `Rs ${report.averageExpense.toFixed(2)}`],
      ],
    });

    doc.save("Spendo_Report.pdf");
  };

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/reports", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReport(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!report) {
    return <p>No report data available.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports</h1>
          <p className="text-muted-foreground text-white">
            View your financial summary and download it as a PDF.
          </p>
        </div>

        <Button onClick={downloadReport} className="flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-500">
          <Download className="mr-2 h-4 w-4  text-white " />
          Download PDF
        </Button>
      </div>

      <SummaryCards report={report} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CategoryBreakdown report={report} />
        </div>

        <Insights report={report} />
      </div>
    </div>
  );
}
