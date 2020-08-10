const { useState, useEffect } = require("react");
const { projectDB } = require("../firebase/config");

export default function useFirestore(collection) {
  const [docs, setDocs] = useState([]);
  const [lastImg, setLastImg] = useState([]);

  useEffect(() => {
    const unsub = projectDB
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
        setLastImg(docs[0]);
      });

    return () => unsub();
  }, [collection]);

  return { docs, lastImg };
}
