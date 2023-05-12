import "../../components/Button/Button.css";
import useScrollCount from "../../utils/useScrollCount";

export const Button = ({
  handleClick,
  icon,
  iconSide,
  size = "large",
  children,
  color = "#000",
  backgroundColor = "#fff",
  border = "none",
  floating = false,
  positionFloatingVertically = "bottom",
  positionFloatingHorizontally = "left",
  mobile,
  floatingIndex = 0,
}) => {
  const scrollCount = useScrollCount();

  return mobile.orientation === "portrait" && scrollCount >= 4 ? (
    <button
      id="button-component"
      onClick={handleClick}
      style={{
        display: "flex",
        position: floating ? "fixed" : "initial",
        bottom:
          positionFloatingVertically === "bottom"
            ? floatingIndex === 0
              ? "3vw"
              : "20vw"
            : "auto",
        left: positionFloatingHorizontally === "left" ? "2vw" : "auto",
        right:
          positionFloatingVertically === "right"
            ? floatingIndex === 0
              ? "2vw"
              : "2vw"
            : "2vw",
        backgroundColor: backgroundColor,
        width:
          size === "max-size"
            ? "80vw"
            : size === "large"
            ? "60vw"
            : size === "medium"
            ? "40vw"
            : "5vw",
        height:
          size === "max-size"
            ? "80vw"
            : size === "large"
            ? "60vw"
            : size === "medium"
            ? "40vw"
            : "5vw",
        border: border,
        color: color,
        padding: floating ? "7vw" : "2vw",
        borderRadius: floating ? "10vw" : "2vw",
      }}
    >
      {children}
    </button>
  ) : (
    null
  );
};
