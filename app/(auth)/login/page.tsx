"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      router.push("/profile");
    } catch (err) {
      setError("Failed to log in with Google. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-customColors-purple to-customColors-pink">
      <div className="w-full max-w-md p-8 bg-customColors-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-customColors-purple">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-customColors-grey">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-customColors-grey focus:border-customColors-purple"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-customColors-grey">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-2 border-customColors-grey focus:border-customColors-purple"
            />
          </div>
          {error && (
            <div className="flex items-center text-customColors-orange space-x-2">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-customColors-purple hover:bg-customColors-pink text-customColors-white"
          >
            Log In
          </Button>
        </form>
        <div className="mt-4">
          <Button
            onClick={handleGoogleLogin}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            <Image
              src="/google-logo.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </Button>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/signup"
            className="text-customColors-pink hover:text-customColors-purple"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
