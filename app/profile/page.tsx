"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { User, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-customColors-purple to-customColors-pink">
      <div className="w-full max-w-md p-8 bg-customColors-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-customColors-purple">
          Profile
        </h2>
        <div className="space-y-4">
          {user.photoURL && (
            <div className="flex justify-center">
              <Image
                src={user.photoURL}
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          )}
          <p className="text-customColors-grey">
            <strong>Email:</strong> {user.email}
          </p>
          {user.displayName && (
            <p className="text-customColors-grey">
              <strong>Name:</strong> {user.displayName}
            </p>
          )}
          <div className="mt-6">
            <Button
              onClick={handleLogout}
              className="w-full bg-customColors-orange hover:bg-customColors-pink text-customColors-white"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
