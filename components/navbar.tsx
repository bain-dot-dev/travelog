"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
      >
        Home
      </Link>
      <Link
        href="#services"
        className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
      >
        Discover
      </Link>
      <Link
        href="#travelpoint"
        className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
      >
        Special Deals
      </Link>
      <Link
        href="#footer"
        className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
      >
        Contact
      </Link>
    </>
  );

  const AuthButtons = () => (
    <>
      {user ? (
        <Link href="/profile" passHref>
          <Button className="text-sm font-medium text-white px-4 lg:px-8 py-2 lg:py-4 h-10 lg:h-12 bg-customColors-purple hover:bg-customColors-purple rounded-full">
            Profile
          </Button>
        </Link>
      ) : (
        <>
          <Link href="/login" passHref>
            <Button className="text-sm font-bold px-4 py-2 hover:bg-gray-100 rounded-full">
              Log In
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className="text-sm font-medium text-white px-4 lg:px-8 py-2 lg:py-4 h-10 lg:h-12 bg-customColors-purple hover:bg-customColors-purple rounded-full">
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </>
  );

  const AuthLinks = () => (
    <>
      {user ? (
        <Link
          href="/profile"
          passHref
          className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
        >
          Profile
        </Link>
      ) : (
        <>
          <Link
            href="/login"
            passHref
            className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            passHref
            className="text-sm font-bold text-customColors-black/50 hover:text-customColors-black"
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );

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
        <Sheet>
          <SheetTrigger asChild>
            <Button className="block xl:hidden z-10 bg-transparent data-[state=open]:bg-transparent p-0">
              <Image
                src="/icons/menuIcon.svg"
                alt="Menu"
                width={24}
                height={24}
                className="rounded-lg w-8 h-8 lg:w-12 lg:h-12"
              />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="hidden">Nav</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              <NavLinks />
              <div className="lg:hidden flex flex-col gap-4">
                <AuthLinks />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden xl:flex items-center gap-8 xl:gap-16">
        <NavLinks />
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

      <div className="hidden lg:flex items-center gap-2 lg:gap-4">
        <AuthButtons />
      </div>
    </nav>
  );
}
