import { useState, useEffect } from "react";

export default function useScrollCount() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const fullHeight = document.body.offsetHeight;
      const totalHeight = fullHeight - windowHeight;
      const currentScrollCount = Math.round(
        (scrollPosition / totalHeight) * 100
      );
      setScrollCount(currentScrollCount);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollCount;
}
