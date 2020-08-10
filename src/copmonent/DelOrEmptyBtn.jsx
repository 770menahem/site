import React from "react";

export default function DelOrEmptyBtn({
  handleDeleteCategory,
  handleEmptyCategory,
}) {
  return (
    <div className=" mx-2">
      <button
        onClick={handleDeleteCategory}
        className="btn btn-danger btn-sm m-2"
        type="submit"
      >
        Delete Category
      </button>
      <button
        onClick={handleEmptyCategory}
        className="btn btn-warning btn-sm m-2"
        type="submit"
      >
        EmptyCategory
      </button>
    </div>
  );
}
