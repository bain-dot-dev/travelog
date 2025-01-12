"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { FirebaseError } from "firebase/app";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case "auth/email-already-in-use":
            setError(
              "This email is already in use. Please try a different email or log in."
            );
            break;
          case "auth/invalid-email":
            setError("Invalid email address. Please check and try again.");
            break;
          case "auth/weak-password":
            setError("Password is too weak. Please use a stronger password.");
            break;
          default:
            setError(`Failed to create an account: ${err.message}`);
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.error("Signup error:", err);
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleSignUp = async () => {
    setError("");

    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case "auth/popup-closed-by-user":
            setError("Google sign-up was cancelled. Please try again.");
            break;
          case "auth/popup-blocked":
            setError(
              "Pop-up was blocked by your browser. Please allow pop-ups for this site."
            );
            break;
          case "auth/account-exists-with-different-credential":
            setError(
              "An account already exists with the same email address but different sign-in credentials. Try signing in with a different method."
            );
            break;
          default:
            setError(`Failed to sign up with Google: ${err.message}`);
        }
      } else {
        setError(
          "An unexpected error occurred during Google sign-up. Please try again."
        );
      }
      console.error("Google signup error:", err);
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 overflow-hidden p-4 bg-customColors-lavenderWhite">
      <div className="relative hidden lg:block h-full">
        <div className="absolute top-4 left-4 z-50">
          <Image
            src="/icons/travelogIcon.svg"
            alt="Travlog logo"
            width={40}
            height={40}
            className="rounded-lg w-8 h-8 lg:w-16 lg:h-16"
          />
        </div>
        <div className="relative h-full bg-cover bg-center">
          <Image
            src="/image/santoriniStairs.png"
            alt="Black church in field"
            width={600}
            height={800}
            className="rounded-xl h-full w-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-40 text-customColors-coalGrey font-circular font-bold leading-8">
          <h2 className="text-4xl font-light">
            Travlog
            <br />
            Explore the world
          </h2>
        </div>
      </div>

      <div className="bg-customColors-lavenderWhite p-8 flex flex-col">
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
            className="text-customColors-coalGrey/70 hover:text-customColors-coalGrey hover:bg-white/10"
            asChild
          >
            <Link href="/">
              Back to website <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex-1 max-w-md mx-auto w-full">
          <h1 className="text-4xl font-light text-customColors-coalGrey mb-4">
            Create an account
          </h1>
          <p className="text-customColors-coalGrey/70 mb-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-customColors-lavender hover:text-customColors-anotherLavender"
            >
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="bg-white border-customColors-eggShell text-customColors-coalGrey placeholder:text-customColors-darkPurple h-12"
                />
              </div>
              <div>
                <Input
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="bg-white border-customColors-eggShell text-customColors-coalGrey placeholder:text-customColors-darkPurple h-12"
                />
              </div>
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-customColors-eggShell text-customColors-coalGrey placeholder:text-customColors-darkPurple h-12"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white border-customColors-eggShell text-customColors-coalGrey placeholder:text-customColors-darkPurple h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-customColors-darkPurple hover:text-white"
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
              className="w-full bg-customColors-lavender hover:bg-customColors-anotherLavender text-customColors-coalGrey h-12"
            >
              Create account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-customColors-black/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-customColors-lavenderWhite px-2 text-customColors-darkPurple">
                  Or register with
                </span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleGoogleSignUp}
              variant="outline"
              className="w-full bg-transparent border-customColors-eggShell text-customColors-coalGrey hover:bg-[] h-12"
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
