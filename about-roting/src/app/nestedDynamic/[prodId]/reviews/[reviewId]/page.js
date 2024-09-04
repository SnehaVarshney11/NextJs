export default function ReviewDetails({ params }) {
  const { prodId, reviewId } = params;

  return (
    <div>
      <h1>Review Details for</h1>
      <p>Product ID: {prodId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
}
