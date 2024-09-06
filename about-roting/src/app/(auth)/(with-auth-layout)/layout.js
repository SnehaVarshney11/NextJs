import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }) {
  return (
    <div className={inter.className}>
      {/* children is page.js of [prodId] */}
      {children}
      <h2>Inner Layout</h2>
    </div>
  );
}
