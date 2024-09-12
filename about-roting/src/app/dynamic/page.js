import Link from "next/link";

export default function Dynamic() {
  const prodId = 100;
  return (
    <div className="text-center">
      <Link href="/">Home</Link>
      <h1>Hello from dynamic</h1>
      <p>Example of Dynamic Routes</p>
      <h2>
        <Link href="dynamic/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="dynamic/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="dynamic/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`dynamic/${prodId}`}>Product {prodId}</Link>
      </h2>
    </div>
  );
}
