import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <div className=" bg-gradient-to-br from-orange-400 to-purple-800">
      {/* Background Image */}
      {/* <Image
        src="/2.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      /> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-8xl font-bold">Welcome SpendO</h1>
          <h2 className="mt-4 text-2xl">
            Take Control of Your Finances, Effortlessly
          </h2>
          <p className="mt-2 text-sm">
            Track Expenses, Make Smarter Decisions.
          </p>
        </div>
        
        
      </div>
     <div className="absolute bottom-0 left-0 right-0 mb-20 flex flex-col items-center gap-4">
  <Button className="bg-white text-orange-600 shadow-2xl font-bold rounded-full px-20 py-6 text-lg">
    Sign Up
  </Button>

  <p className="text-white">
    Have an account?{" "}
    <Link href="/login" className="font-semibold">
      
        Login
      
    </Link>
  </p>
</div>

      

      </div>
    </section>
  );
}
