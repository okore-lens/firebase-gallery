import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion/dist/framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            layout
            whileHover={{ opacity: 1, cursor: "pointer" }}
            onClick={() => {
              setSelectedImg(doc.url);
            }}
            key={doc.id}
          >
            <motion.img
              src={doc.url}
              alt="Uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
