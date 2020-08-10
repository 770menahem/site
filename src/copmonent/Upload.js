import React, { useState } from "react";
import Progress from "./Progress";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      if (selected) alert("select file with png/jpeg type");
    }
  };

  return (
    <form className="upload">
      <label>
        <input type="file" onChange={handleChange} />
        <span className="pointer">+</span>
      </label>
      {file && <Progress file={file} setFile={setFile} />}
    </form>
  );
}
