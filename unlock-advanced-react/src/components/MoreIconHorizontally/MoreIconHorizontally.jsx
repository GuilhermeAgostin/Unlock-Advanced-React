import { useEffect, useRef, useState } from "react";
import welcome1 from "../../assets/images/welcome-1.jpg";
import welcome2 from "../../assets/images/welcome-2.jpg";
import welcome3 from "../../assets/images/welcome-3.jpg";
import welcome1Mb from "../../assets/images/welcome-1-mb.jpg";
import welcome2Mb from "../../assets/images/welcome-2-mb.jpg";
import welcome3Mb from "../../assets/images/welcome-3-mb.jpg";
import { debounce } from "lodash";

import "./MoreIconHorizontally.css";
import { MenuToCloseIcon } from "../MenuToCloseIcon/MenuToCloseIcon";

export const MoreIconHorizontally = ({ windowSize = undefined }) => {
  const colors = [
    {
      desktopImage: welcome1,
      mobileImage: welcome1Mb,
      title: "Close-Up Photo of Burger - Photo by Valeria Boltneva",
    },
    {
      desktopImage: welcome2,
      mobileImage: welcome2Mb,
      title: "Ham and Bacon Burger - Photo by Jonathan Borba",
    },
    {
      desktopImage: welcome3,
      mobileImage: welcome3Mb,
      title:
        "Close-Up Shot of a Delicious Hamburger - Photo by The Good Burger",
    },
  ];
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);
  const delay = 8000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleClickPrev = debounce(() => {
    if (index === 0) {
      setIndex(colors.length - 1);
    }
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }, 400);

  const handleClickNext = debounce(async () => {
    if (index === colors.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 400);

  const showMenuHamburger = debounce(() => {
    setCounter(counter + 1);

    let navigation = document.getElementById("nav");
    let navigationText = document.getElementsByClassName("nav-text");

    if (counter === 0 && show === false) {
      setShow(true);

      navigation.style.animationName = "menuOpen";

      navigationText[0].style.animationName = "cont";
      navigationText[0].style.animationDuration = "2000ms";

      navigationText[1].style.animationName = "cont";
      navigationText[1].style.animationDuration = "2000ms";

      navigationText[2].style.animationName = "cont";
      navigationText[2].style.animationDuration = "2000ms";

      navigation.style.display = "grid";
      navigation.style.top = "13vh";
    }
    if (counter === 1 && show) {
      navigation.style.animationName = "menuClose";

      navigationText[2].style.animationName = "contClose";
      navigationText[2].style.animationDuration = "500ms";

      navigationText[1].style.animationName = "contClose";
      navigationText[1].style.animationDuration = "500ms";

      navigationText[0].style.animationName = "contClose";
      navigationText[0].style.animationDuration = "500ms";
      setShow(false);
      setCounter(0);
    }
  }, 400);

  useEffect(() => {
    if (show === true && counter === 1) {
      const timeOut = setTimeout(() => {
        let navigation = document.getElementById("nav");
        let navigationText = document.getElementsByClassName("nav-text");

        navigation.style.animationName = "menuClose";

        navigationText[2].style.animationName = "contClose";
        navigationText[2].style.animationDuration = "500ms";

        navigationText[1].style.animationName = "contClose";
        navigationText[1].style.animationDuration = "500ms";

        navigationText[0].style.animationName = "contClose";
        navigationText[0].style.animationDuration = "500ms";
        setShow(false);
        setCounter(0);

        let d = document.getElementById("nav-icon4");

        d.classList.remove("open");
      }, 8000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [show, counter]);

  return (
    <div className="slideshow">
      <div className="app-bar-slide">
        <div className="restaurant-logo">
          <a className="text-restaurant-logo" href="#welcome">
            Fraga
          </a>
        </div>

        {windowSize !== undefined ? (
          windowSize !== "Desktop" && windowSize?.mediaType === "Mobile"   ? (
            <div
              id="hamburger"
              className="hamburger"
              onClick={showMenuHamburger}
            >
              <MenuToCloseIcon></MenuToCloseIcon>
            </div>
          ) : null
        ) : null}

        <div id="nav" className="nav">
          <a className="nav-text" href="#welcome" style={{ padding: "0 2vw" }}>
            WELCOME
          </a>
          <a className="nav-text" href="#menu" style={{ padding: "0 2vw" }}>
            MENU
          </a>
          <a className="nav-text" href="#booking" style={{ padding: "0 1vw" }}>
            RESERVATION
          </a>
        </div>
      </div>

      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((image, index) => (
          <div
            className="slide"
            key={index}
            title={image.title}
            style={{
              backgroundImage: `url(${
                windowSize !== undefined
                  ? windowSize === "Desktop"
                    ? image.desktopImage
                    : image.mobileImage
                  : null
              })`,
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>

      <div className="arrow-container">
        <a className="prev" onClick={handleClickPrev}>
          &#10094;
        </a>
        <a className="next" onClick={handleClickNext}>
          &#10095;
        </a>
      </div>
    </div>
  );
};
