import React from "react";
import GlobalState from "./globalState";

export default function DeleteTitle({ handleDeleteTitle }) {
  // const { data: allData, setData, title } = GlobalState();
  // const handleDelete = () => {
  // const addedTo = allData[0].data;

  // data.map((d) => addedTo.push(d));
  // console.log(addedTo);
  // console.log(data);

  // const newData = allData.filter((t) => t.title !== title);
  // console.log(allData);
  // console.log(newData);
  // setData([newData]);
  // };

  return (
    <div className="list mx-2">
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
