"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="flex flex-row-reverse lg:flex-row justify-between p-4 lg:px-16 lg:py-8 xl:p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 lg:gap-4">
        <Image
          src="/icons/travelogIcon.svg"
          alt="Travlog logo"
          width={40}
          height={40}
          className="rounded-lg w-8 h-8 lg:w-10 lg:h-10 xl:block hidden"
        />
        <span className="text-lg lg:text-2xl font-black leading-10 xl:block hidden">
          Travlog
        </span>
        <Button variant="ghost" size="icon" className="block xl:hidden">
          <Image
            src="/icons/menuIcon.svg"
            alt="Menu"
            width={40}
            height={40}
            className="rounded-lg w-8 h-8 lg:w-12 lg:h-12"
          />
        </Button>
      </div>

      <div className="hidden xl:flex items-center gap-8 xl:gap-16">
        <Link
          href="/"
          className="text-sm 16px] font-bold text-customColors-black/50 hover:text-customColors-black"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="text-sm leading-4 font-bold text-customColors-black/50 hover:text-customColors-black"
        >
          Discover
        </Link>
        <Link
          href="#travelpoint"
          className="text-sm leading-4 font-bold text-customColors-black/50 hover:text-customColors-black"
        >
          Special Deals
        </Link>
        <Link
          href="#footer"
          className="text-sm leading-4 font-bold text-customColors-black/50 hover:text-customColors-black"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <Image
          src="/icons/travelogIcon.svg"
          alt="Travlog logo"
          width={40}
          height={40}
          className="rounded-lg w-8 h-8 lg:w-10 lg:h-10 block xl:hidden"
        />
        <span className="text-lg lg:text-2xl font-black leading-10 block xl:hidden">
          Travlog
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-2 lg:gap-4 ">
        {user ? (
          <Link href="/profile" passHref>
            <Button className="text-sm leading-4 font-medium text-white px-4 lg:px-8 py-2 lg:py-4 h-10 lg:h-12 bg-customColors-purple hover:bg-customColors-purple rounded-full">
              Profile
            </Button>
          </Link>
        ) : (
          <>
            <Link href="/login" passHref>
              <Button className="text-sm leading-4 font-bold px-4 py-2 hover:bg-gray-100 rounded-full">
                Log In
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button className="text-sm leading-4 font-medium text-white px-4 lg:px-8 py-2 lg:py-4 h-10 lg:h-12 bg-customColors-purple hover:bg-customColors-purple rounded-full">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
