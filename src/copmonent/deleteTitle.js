import React from "react";

export default function DeleteTitle({ handleDeleteTitle }) {
  return (
    <div className=" mx-2">
      <button
        onClick={handleDeleteTitle}
        className="btn btn-danger btn-sm m-2"
        type="submit"
      >
        Delete Title
      </button>
    </div>
  );
}
