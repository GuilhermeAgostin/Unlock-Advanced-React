import { useEffect, useState } from "react";
import "./Counter.css";

export const Counter = ({
  onClick,
  onTouchEnd,
  seeExplainers,
  windowSize = undefined,
}) => {
  const [counter, setCounter] = useState(0);
  const [aux, setAux] = useState(0);
  const [targetClientX, setTargetClientX] = useState(0);
  const [targetClientY, setTargetClientY] = useState(0);

  const Colors = [
    "#2F4858",
    "#00BEFF",
    "#EB9928",
    "#743600",
    "#006B5F",
    "#62BAAC",
    "#005248",
    "#9C2B9C",
    "#F380F0",
    "#5E0062",
    "#A21460",
    "#D44656",
    "#F37F4B",
    "#FFBB4F",
  ];

  function isPrimeNumber(num) {
    if (num <= 1) {
      return false;
    }

    if (num === 2 || num === 3) {
      return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }

    const max = Math.sqrt(num);
    for (let i = 5; i <= max; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }

  function changeColor(e) {
    setCounter(counter + 1);
    setAux(aux + 1);

    setTargetClientX(e.clientX - 50);
    setTargetClientY(e.clientY - 100);
  }

  useEffect(() => {
    let removeAnimation = null;

    if (isPrimeNumber(counter)) {
      let wrapperDiv = document.getElementById("wrapper");
      let rootPage = document.querySelector(":root");

      rootPage.style.setProperty("--x", `${targetClientX}px`);
      rootPage.style.setProperty("--y", `${targetClientY}px`);
      rootPage.style.setProperty("--test2", Colors[aux]);

      if (aux === 0) {
        rootPage.style.setProperty("--test3", "#6C75A3");

        wrapperDiv.style.animation = "gradient ease 700ms forwards";

        removeAnimation = setTimeout(() => {
          wrapperDiv.style.animation = "";
          wrapperDiv.style.background = Colors[aux];
        }, 700);
      } else {
        if (aux >= 14) {
          setAux(0);
        } else {
          rootPage.style.setProperty("--test3", Colors[aux - 1]);

          wrapperDiv.style.animation = "gradient ease 700ms forwards";

          removeAnimation = setTimeout(() => {
            wrapperDiv.style.animation = "";
            wrapperDiv.style.background = Colors[aux];
          }, 700);
        }
      }
    }
  }, [counter, targetClientX, targetClientY, aux]);

  return (
    <div
      className="full-card"
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      style={{
        marginLeft:
          windowSize !== undefined
            ? windowSize !== "Desktop"
              ? 0
              : "2vw"
            : null,
      }}
    >
      <div id="wrapper" className="wrapper" onClick={(e) => changeColor(e)}>
        {[
          ...Array(
            windowSize !== undefined
              ? windowSize === "Desktop"
                ? 200
                : windowSize.orientation === "portrait"
                ? 750
                : 200
              : null
          ),
        ].map((e, i) => (
          <div id={i} className="box" key={i}></div>
        ))}

        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "40%",
            cursor: "pointer",
          }}
        >
          <a
            className="click"
            style={{ color: counter > 1 ? "white" : "black" }}
          >
            Click Me!
          </a>

          <h2
            className="counter"
            style={{ color: counter > 1 ? "white" : "black", width: "100%" }}
          >
            {counter}
          </h2>
        </div>
      </div>
    </div>
  );
};
