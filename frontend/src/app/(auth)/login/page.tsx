import SignIn from "@/src/components/signin";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-purple-700 to-purple-900">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <SignIn />
        </div>
        <p className="mt-8 max-w-md text-center text text-white/80">
          Secure • Beautiful • Simple
        </p>
      </div>
    </section>
  );
}
