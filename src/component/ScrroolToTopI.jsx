import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const secondSection = document.getElementById("about");
      if (secondSection) {
        const position = secondSection.getBoundingClientRect().bottom;
        setVisible(position < window.innerHeight);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        backgroundColor: "#333",
        color: "white",
        border: "none",
        zIndex: 1000,
        cursor: "pointer",
      }}
      aria-label="Scroll to Top"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollToTopButton;
