import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <div className="absolute top-0 left-0 xl:hidden lg:block hidden">
          <Image
            src="/icons/orangeOrb.svg"
            alt="Orange orb"
            width={500}
            height={500}
            className="text-customColors-orange "
          />
        </div>
        <div className="absolute lg:top-[1020px] right-0 xl:hidden lg:block hidden">
          <Image
            src="/icons/yellowOrb.svg"
            alt="Yellow orb"
            width={500}
            height={500}
          />
        </div>
        {children}
        <div className="absolute inset-0 top-[4250px] hidden xl:block">
          <Image
            src="/image/bgFluid.png"
            alt="Fluid"
            width={2506}
            height={958}
          />
        </div>
        <div className="absolute inset-0 top-[6405px] z-0 hidden lg:block xl:hidden">
          <Image
            src="/image/bgFluid2.png"
            alt="Fluid"
            width={1204}
            height={258}
          />
        </div>
      </main>
    </>
  );
}
