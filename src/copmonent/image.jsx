import React from "react";

const Image = ({ data, setData, titles }) => {
  let id = 1;

  const handleTitle = (img, t) => {
    if (!t) return;
    setData(img, data.title, t);
  };

  // console.log(data);

  return (
    <div className="list mx-2 row">
      {data.data.length
        ? data.data.map((img) => (
            <div
              key={id++}
              className="m-2"
              style={{ backgroundColor: "#e3f2fd" }}
            >
              <img alt="q" src={img} width="50px" />
              <br />
              <select onChange={(e) => handleTitle(img, e.target.value)}>
                {["", ...titles].map(
                  (t) =>
                    t !== data.title && (
                      <option key={id++} value={t}>
                        {t}
                      </option>
                    )
                )}
              </select>
            </div>
          ))
        : "empty"}
    </div>
  );
};

export default Image;
