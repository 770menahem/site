import React, { useState } from "react";
import Progress from "./Progress";

export default function Upload() {
  const [file, setFile] = useState(null);
  // const [error, setError] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      // setError("");
    } else {
      setFile(null);
      if (selected) alert("select file with png/jpeg type");
    }
  };

  return (
    <form className="upload">
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      {/* {error && alert(error)} */}
      {file && <Progress file={file} setFile={setFile} />}
    </form>
  );
}
