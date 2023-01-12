import { useState, useEffect } from "react";
export const useWindowWide = (size: any) => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width > size;
};
