const { useState, useEffect } = require("react");
const { projectDB } = require("../firebase/config");

export default function useFirestore(collection) {
  const [docs, steDocs] = useState([]);

  useEffect(() => {
    const unsub = projectDB
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        steDocs(document);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
}
