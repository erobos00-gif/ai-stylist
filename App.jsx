import React, { useState } from "react";
import Upload from "./components/Upload";
import Results from "./components/Results";

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>AI Stylist App</h1>
      <Upload setResults={setResults} setLoading={setLoading} />
      <Results results={results} loading={loading} />
    </div>
  );
}

export default App;
