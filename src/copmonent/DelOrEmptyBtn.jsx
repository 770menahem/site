import React from "react";

export default function DelOrEmptyBtn({ handleDeleteTitle, handleEmptyTitle }) {
  return (
    <div className=" mx-2">
      <button
        onClick={handleDeleteTitle}
        className="btn btn-danger btn-sm m-2"
        type="submit"
      >
        Delete Category
      </button>
      <button
        onClick={handleEmptyTitle}
        className="btn btn-warning btn-sm m-2"
        type="submit"
      >
        EmptyCategory
      </button>
    </div>
  );
}
