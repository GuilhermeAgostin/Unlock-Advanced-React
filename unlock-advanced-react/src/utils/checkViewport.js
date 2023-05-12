import { useEffect, useState, useMemo } from "react";

const ViewportListener = () => {
  const [width, setWidth] = useState(undefined);
  const [orientation, setOrientation] = useState(undefined);

  useEffect(() => {
    const handleWindowResize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
        if (window.innerHeight > window.innerWidth) {
          setOrientation("portrait");
        } else {
          setOrientation("landscape");
        }
      }, 100);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const mediaType = useMemo(() => {
    if (width <= 768) {
      console.log("Mobile");
      return { mediaType: "Mobile", orientation: orientation };
    } else if (width > 768 && width <= 1024) {
      console.log("Tablet");
      return { mediaType: "Tablet", orientation: orientation };
    } else if (width > 1024) {
      console.log("Desktop");
      return "Desktop";
    } else {
      return undefined;
    }
  }, [width, orientation]);

  return mediaType;
};

export default ViewportListener;
