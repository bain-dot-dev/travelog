"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { User, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    return <div className="text-center p-8 text-[#2D2A3E]">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F7FF]">
      <Card className="w-full max-w-md p-6 bg-white rounded-3xl shadow-lg relative">
        <div className="absolute top-4 right-4">
          <Link href="/">
            <Undo2 className="w-5 h-5 text-[#8D7FFF]" />
          </Link>
        </div>

        <div className="flex items-start space-x-4">
          <div className="relative">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Profile"
                width={64}
                height={64}
                className="rounded-full border-2 border-[#8D7FFF]"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-[#E0E0E0] flex items-center justify-center text-xl font-bold text-[#6B6885]">
                {user.email?.[0].toUpperCase()}
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[#2D2A3E]">
                {user.displayName || "Welcome!"}
              </h2>
              <p className="text-[#6B6885] text-sm">{user.email}</p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleLogout}
          className="w-full mt-6 bg-[#8D7FFF] hover:bg-[#9F94FF] text-white"
        >
          Log Out
        </Button>
      </Card>
    </div>
  );
}
