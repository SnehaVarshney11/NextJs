import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ProdDetailsLayout({ children }) {
  return (
    <div className={inter.className}>
      {/* children is page.js of [prodId] */}
      {children}
      <h2>Features Product</h2>
    </div>
  );
}
