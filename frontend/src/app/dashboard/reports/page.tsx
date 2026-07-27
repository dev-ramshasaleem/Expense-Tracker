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
    console.log("Download PDF");
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
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">
            View your financial summary and download it as a PDF.
          </p>
        </div>

        <Button onClick={downloadReport}>
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
