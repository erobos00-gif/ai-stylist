import React, { useState } from "react";

const Upload = ({ setResults, setLoading }) => {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      const fakeResult = {
        bodyShape: "Rectangle",
        skinTone: { hex: "#c68642", palette: "Warm Autumn" }
      };

      localStorage.setItem("aiStylistProfile", JSON.stringify(fakeResult));
      setResults(fakeResult);
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {preview && <img src={preview} width="200" />}
      <button onClick={handleAnalyze}>Analyze</button>
    </div>
  );
};

export default Upload;
