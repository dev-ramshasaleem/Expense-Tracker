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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Reports</h1>

          <p className="mt-1 text-sm text-white/80 sm:text-base">
            View your financial summary and download it as a PDF.
          </p>
        </div>

        <Button
          onClick={downloadReport}
          className="w-full bg-purple-600 text-white hover:bg-purple-500 sm:w-auto"
        >
          <Download className="mr-2 h-4 w-4" />
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
