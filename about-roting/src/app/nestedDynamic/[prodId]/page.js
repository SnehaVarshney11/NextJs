// For dynmaic meta data generateMetadata is fixed function name
export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.prodId}`,
  };
};

export default function ProductDetails({ params }) {
  const { prodId } = params;

  return (
    <div>
      <h1>Details about product: {prodId}</h1>
    </div>
  );
}
