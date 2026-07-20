"use client";

import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  RegisterSchema,
} from "../lib/validations/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../lib/axios";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const res = await api.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      console.log(res.data);
    } catch (error: any) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
    }
  };

  return (
    <>
      <CardHeader className="px-0 text-center">
        <CardTitle className="text-3xl font-bold text-white">
          Create Account
        </CardTitle>

        <CardDescription className="text-white/80">
          Start tracking your expenses with SpendO.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Full Name
          </Label>

          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60 " />

            <Input
              {...register("name")}
              placeholder="John Doe"
              className="h-12 border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50 focus-visible:ring-purple-400"
            />
          </div>
        </div>

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

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-white">
            Confirm Password
          </Label>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />

            <Input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 border-white/20 bg-white/10 pl-10 pr-12 text-white placeholder:text-white/50 focus-visible:ring-purple-400"
            />

            <Button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute bg-white/10 hover:bg-purple-400 right-3 top-1/2 -translate-y-1/2 text-white/60"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

          {/* Login Link */}
          <p className="text-center text text-white/80">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-white hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
