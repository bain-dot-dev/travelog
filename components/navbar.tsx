import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/icons/travelogIcon.svg"
          alt="Travlog logo"
          width={40}
          height={40}
          className="rounded-lg w-8 h-8 md:w-10 md:h-10 lg:block hidden"
        />
        <span className="text-lg md:text-2xl font-black leading-10 lg:block hidden">
          Travlog
        </span>
        <Button variant="ghost" size="icon" className="block lg:hidden">
          <Image
            src="/icons/menuIcon.svg"
            alt="Menu"
            width={40}
            height={40}
            className="rounded-lg w-8 h-8 md:w-10 md:h-10"
          />
        </Button>
      </div>

      <div className="hidden lg:flex items-center gap-8 lg:gap-16">
        <Link
          href="/"
          className="text-sm 16px] font-bold text-customColors-black hover:text-customColors-black/50"
        >
          Home
        </Link>
        <Link
          href="/discover"
          className="text-sm leading-4 font-bold text-customColors-black hover:text-customColors-black/50"
        >
          Discover
        </Link>
        <Link
          href="/special-deals"
          className="text-sm leading-4 font-bold text-customColors-black hover:text-customColors-black/50"
        >
          Special Deals
        </Link>
        <Link
          href="/contact"
          className="text-sm leading-4 font-bold text-customColors-black hover:text-customColors-black/50"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/icons/travelogIcon.svg"
          alt="Travlog logo"
          width={40}
          height={40}
          className="rounded-lg w-8 h-8 md:w-10 md:h-10 block lg:hidden"
        />
        <span className="text-lg md:text-2xl font-black leading-10 block lg:hidden">
          Travlog
        </span>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden md:block text-sm leading-4 font-bold px-4 py-2 hover:bg-gray-100 rounded-full">
          Log In
        </button>
        <Button className="text-sm leading-4 font-medium text-white px-4 md:px-8 py-2 md:py-4 h-10 md:h-12 bg-customColors-purple hover:bg-customColors-purple rounded-full">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
