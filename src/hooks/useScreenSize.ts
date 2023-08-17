"use client";

import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState("");

  const checkScreenSize = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setScreenSize("small");
    } else if (width >= 576 && width < 992) {
      setScreenSize("medium");
    } else {
      setScreenSize("large");
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
