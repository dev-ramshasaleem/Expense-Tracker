import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 to-purple-800">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {/* Hero */}
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Welcome SpendO
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
              Take Control of Your Finances, Effortlessly
            </h2>

            <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
              Track Expenses, Make Smarter Decisions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 pb-4">
          <Link href="/register">
            <Button className="h-12 rounded-full bg-white px-10 text-base font-bold text-purple-800 shadow-xl hover:bg-purple-200 sm:h-14 sm:px-16 md:px-20">
              Sign Up
            </Button>
          </Link>

          <p className="text-sm text-white sm:text-base">
            Have an account?{" "}
            <Link
              href="/login"
              className="font-semibold underline-offset-4 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
