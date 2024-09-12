"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={inter.className}>
      {/* children is page.js of [prodId] */}
      {children}
      <h2>Features Product</h2>
      <nav>
        {navLinks.map((link) => {
          const isactive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isactive ? "font-extrabold mr-4" : "text-blue-500 mr-4"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
