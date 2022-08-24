import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={(ev) => {
        if (ev.target.classList.contains("backdrop")) {
          setSelectedImg(null);
        }
      }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
