export default function ProductDetails({ params }) {
  const { prodId } = params;

  return (
    <div>
      <h1>Details about product: {prodId}</h1>
    </div>
  );
}
