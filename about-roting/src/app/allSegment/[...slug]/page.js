export default function Docs({ params }) {
  const { slug } = params;

  if (slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs Home Page from All Segement Example</h1>;
}

// URL - http://localhost:3000/allSegment/routing/catch-all-segments
