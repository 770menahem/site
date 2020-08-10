import React from "react";

const ImageZoom = ({ currentImg, setCurrentImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("popup")) setCurrentImg(null);
  };
  return (
    <div className="popup" onClick={handleClick}>
      <img src={currentImg} alt="q" />
    </div>
  );
};

export default ImageZoom;
