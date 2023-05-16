import { useMemo } from "react";
import { handleSignsCalculator } from "./handleSignsCalculator";
import "./MemoizingValues.css";

export const ResultSignsCalculator = (props) => {
  const { day, month } = props;
  const result = useMemo(() => handleSignsCalculator(day, month), [day, month]);

  return (
    <div
      className="signs-characteristics-container"
      style={{
        animation:
          !!day && !!month
            ? "open-characteristics ease 400ms forwards"
            : "close-characteristics ease 400ms forwards",
      }}
    >
      <h3>{result.name}</h3>
      <section className="signs-characteristics">
        {!!result.zodiacSignImage ? (
          <>
            <img src={result.zodiacSignImage} className="zodiacSignImage"></img>

            <h5>{result.characteristics}</h5>
          </>
        ) : null}
      </section>
    </div>
  );
};
