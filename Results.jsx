import React from "react";

const Results = ({ results, loading }) => {
  if (loading) return <h2>Analyzing...</h2>;
  if (!results) return null;

  return (
    <div>
      <h2>Results</h2>
      <p>Body Shape: {results.bodyShape}</p>
      <p>Skin Tone: {results.skinTone.hex}</p>
      <p>Season: {results.skinTone.palette}</p>

      <a href="https://example.com?aff_id=EROBOS123" target="_blank">
        <button>Buy Now</button>
      </a>
    </div>
  );
};

export default Results;
