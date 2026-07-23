"use client";

import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { api } from "../lib/axios";
import { LoginSchema } from "../lib/validations/login-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      console.log(res.data);

      // Save JWT
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.response?.data);

      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <CardHeader className="px-0 text-center">
        <div className="relative text-center">
          <CardTitle className="text-3xl font-bold text-white">
            Welcome Back{" "}
          </CardTitle>
          <Sparkles className="absolute right-14  h-7 w-7 -translate-y-8 text-white" />
        </div>

        <CardDescription className="text-white/80">
          Start tracking your expenses with SpendO.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />

            <Input
              {...register("email")}
              placeholder="john@example.com"
              className="h-12 border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50 focus-visible:ring-purple-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />

            <Input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 border-white/20 bg-white/10 pl-10 pr-12 text-white placeholder:text-white/50 focus-visible:ring-purple-400"
            />

            <Button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute bg-white/10 hover:bg-purple-400 right-3 top-1/2 -translate-y-1/2 text-white/60"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-12 w-full rounded-full bg-white text-lg font-semibold text-purple-800 hover:bg-purple-200"
          >
            {isSubmitting ? "Logging In..." : "Log In"}
          </Button>

          <p className="text-center text text-white/80">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-white hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
