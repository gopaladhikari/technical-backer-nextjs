"use client";
import { useEffect } from "react";
import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  useEffect(() => {
    pathname === "/"
      ? (document.title = "Home | Technical Backer")
      : (document.title =
          pathname.slice(1, 2).toUpperCase() +
          pathname.slice(2) +
          " | Technical Backer");
  }, [pathname]);

  return (
    <header className="text-gray-600 body-font shadow-md mb-6">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
        <Link href={"/"} className="">
          <Image src={"/logo.png"} width={90} height={50} alt="Logo" />
        </Link>
        <nav className="flex flex-wrap items-center gap-6">
          {navLinks.map(({ id, href, title }) => {
            return (
              <Link
                className={`text-black text-[15px] font-semibold ${
                  href === pathname ? "text-[#157347]" : null
                }`}
                key={id}
                href={href}
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
