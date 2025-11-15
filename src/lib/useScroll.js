import { useEffect, useState } from "react";

export const useScroll = (threshold = 10) => {
  const [scrollData, setScrollData] = useState({
    isScrolled: false,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollData({
        isScrolled: y > threshold,
        scrollY: y,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollData;
};
