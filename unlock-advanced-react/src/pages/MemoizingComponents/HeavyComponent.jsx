import React from "react";
import "./MemoizingComponents.css"

const HeavyComponent = () => {
  const generateRandomColor = () => {
    // The decimal number 16777215 is equal to FFFFFF, which represents the color white
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const divs = [];
  for (let i = 0; i < 2000; i++) {
    divs.push(
      <div
        key={i}
        className="square"
        style={{ backgroundColor: generateRandomColor() }}
      ></div>
    );
  }

  return <div className="square-container">{divs}</div>;
};

export default React.memo(HeavyComponent);
