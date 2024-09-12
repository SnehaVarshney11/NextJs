import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Hello from Home Page</h1>
      <p>Example of Routing</p>
      <Link href="/dashboard" className="block">
        Dashboard
      </Link>
      <Link href="/dynamic" className="block">
        Products
      </Link>
    </div>
  );
}
