import { useState, useEffect } from "react";
import axios from "axios";

export default function GlobalState() {
  const [data, setData] = useState([{ title: "All", data: [] }]);

  useEffect(() => {
    (async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData([
        {
          title: "All",
          data: response.data
            .filter((photo) => photo.id < 50)
            .map((photo) => photo.url),
        },
      ]);
    })();
  }, []);

  const getDataByTitle = (title) => {
    return data.filter((d) => d.title === title)[0];
  };

  const getTitles = () => {
    return data.map((i) => i.title);
  };

  return { data, setData, getDataByTitle, getTitles };
}

// const [data, setData] = useState([
//   { title: "All", data: [] },
//   { title: "a", data: ["a", "b"] },
//   { title: "b", data: [4, "c", 5] },
//   {
//     title: "c",
//     data: [
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//       <img alt="d" src="https://source.unsplash.com/user/erondu/160x90" />,
//     ],
//   },
// ]);
