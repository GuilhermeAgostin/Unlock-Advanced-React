import "./MenuToCloseIcon.css";

export const MenuToCloseIcon = () => {
  return (
    <>
      <div
        id="nav-icon4"
        onClick={() => {
          let d = document.getElementById("nav-icon4");

          d.classList.toggle("open");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
