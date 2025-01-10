import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Career", href: "#" },
      { name: "Mobile", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Why Travlog?", href: "#" },
      { name: "Partner with us", href: "#" },
      { name: "FAQ’s", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Meet Us",
    links: [
      { name: "+00 92 1234 56789", href: "" },
      { name: "info@travlog.com", href: "" },
      { name: "205. R Street, New York BD23200", href: "" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-white mx-auto px-4 lg:px-16 xl:px-32 py-12 lg:py-16">
      <div className="container mx-auto 2xl:px-11 max-w-7xl">
        <div className="flex flex-col xl:flex-row justify-between gap-8 lg:gap-16 xl:gap-16">
          <div className="space-y-8 font-circular xl:w-[560px] xl:h-[183px]">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/travelogIcon.svg"
                alt="Travlog logo"
                width={40}
                height={40}
                className="rounded-lg w-10 h-10 lg:w-8 lg:h-8"
              />
              <span className="text-2xl text-customColors-black font-bold leading-10 ">
                Travlog
              </span>
            </div>
            <p className="text-gray-500 text-[16px] leading-[25px] lg:text-[23px] lg:leading-[36px] ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="flex gap-4 xl:pt-8">
              <Link href="#">
                <Image
                  src="/icons/facebookIcon.svg"
                  alt="Facebook logo"
                  width={40}
                  height={40}
                  className="lg:w-8 lg:h-8"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/twitterIcon.svg"
                  alt="Twitter logo"
                  width={40}
                  height={40}
                  className="lg:w-8 lg:h-8"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/instagramIcon.svg"
                  alt="Instagram logo"
                  width={40}
                  height={40}
                  className="lg:w-8 lg:h-8"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-col lg:flex-row justify-between">
            {footerData.map((section, index) => (
              <div className="space-y-4 font-inter" key={index}>
                <h3 className="text-[23px] leading-[27px] text-customColors-black font-bold pb-4">
                  {section.title}
                </h3>
                <ul className="space-y-8 text-[18px] leading-[28px] xl:w-[165px]">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="text-customColors-black/50 hover:text-customColors-black"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <span className="text-customColors-black/50">
                          {link.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="company" className="border-none">
                <AccordionTrigger className="text-[#191825] text-2xl font-bold hover:no-underline">
                  Company
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  {footerData[0].links.map((link, linkIndex) => (
                    <div key={linkIndex} className="text-[#191825]/60">
                      <Link href={link.href} className="hover:text-[#191825]">
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact" className="border-none">
                <AccordionTrigger className="text-[#191825] text-2xl font-bold hover:no-underline">
                  Contact Us
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  {footerData[1].links.map((link, linkIndex) => (
                    <div key={linkIndex} className="text-[#191825]/60">
                      <Link href={link.href} className="hover:text-[#191825]">
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="meet" className="border-none">
                <AccordionTrigger className="text-[#191825] text-2xl font-bold hover:no-underline">
                  Meet Us
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  {footerData[2].links.map((link, linkIndex) => (
                    <div key={linkIndex} className="text-[#191825]/60">
                      {link.name}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </footer>
  );
}
