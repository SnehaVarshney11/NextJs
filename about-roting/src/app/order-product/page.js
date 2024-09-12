"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <p>Example of Navigating Programmatically</p>
      <button onClick={handleClick} className="border border-black">
        Place Order
      </button>
    </>
  );
}
