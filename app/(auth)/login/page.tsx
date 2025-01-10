"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      setError("Failed to log in with Google. Please try again.");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Section */}
      <div className="relative hidden lg:block bg-[#F8F7FF]">
        <div className="absolute top-8 left-10 z-50">
          <Image
            src="/icons/travelogIcon.svg"
            alt="Travlog logo"
            width={40}
            height={40}
            className="rounded-lg w-8 h-8 lg:w-16 lg:h-16"
          />
        </div>
        <div className="absolute inset-0 left-6 top-4 bg-cover bg-center">
          <Image
            src="/image/santoriniStairs.png"
            alt="Santorini stairs"
            width={600}
            height={800}
            className="rounded-xl w-[350px] h-[439px] lg:w-[693px] lg:h-[869px] xl:w-[800px] xl:h-[869px]"
          />
        </div>
        <div className="absolute bottom-5 left-10 right-40 text-[#2D2A3E] font-circular font-bold leading-8">
          <h2 className="text-4xl font-light mb-4">
            Travlog
            <br />
            Explore the world
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-[#F8F7FF] p-8 flex flex-col">
        <div className="lg:hidden mb-8">
          <Image
            src="/icons/travelogIcon.svg"
            alt="Travlog logo"
            width={40}
            height={40}
            className="rounded-lg w-8 h-8 lg:w-10 lg:h-10"
          />
        </div>

        <div className="flex justify-end mb-12">
          <Button
            variant="ghost"
            className="text-[#2D2A3E]/70 hover:text-[#2D2A3E] hover:bg-white/10"
            asChild
          >
            <Link href="/">
              Back to website <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex-1 max-w-md mx-auto w-full">
          <h1 className="text-4xl font-light text-[#2D2A3E] mb-4">
            Log in to your account
          </h1>
          <p className="text-[#2D2A3E]/70 mb-8">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#8D7FFF] hover:text-[#9F94FF]"
            >
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#FFFFFF] border-[#E0E0E0] text-[#2D2A3E] placeholder:text-[#6B6885] h-12"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-[#FFFFFF] border-[#E0E0E0] text-[#2D2A3E] placeholder:text-[#6B6885] h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6885] hover:text-[#2D2A3E]"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {error && (
              <div className="flex items-center text-red-500 space-x-2">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#8D7FFF] hover:bg-[#9F94FF] text-white h-12"
            >
              Log in
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-customColors-black/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#F8F7FF] px-2 text-[#6B6885]">
                  Or log in with
                </span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full bg-transparent border-[#E0E0E0] text-[#2D2A3E] hover:bg-white/5 h-12"
            >
              <Image
                src="/image/google-logo.png"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

