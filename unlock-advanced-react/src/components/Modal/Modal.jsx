import "./Modal.css";

export const Modal = ({ title, children, color, openModal, setOpenModal }) => {
  function changeClass() {
    const element = document.getElementById("myModal");
    const element2 = document.getElementById("modalContent");
    element2.classList.add("out-content");
    element.classList.add("out");

    setTimeout(() => {
      setOpenModal(false);
      element2.classList.remove("out-content");
      element.classList.remove("out");
    }, 1000);
  }

  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: openModal ? "flex" : "none" }}
    >
      <div id="modalContent" className="modal-content">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            minHeight: "4vh",
            width: "100%",
            zIndex: 1,
          }}
        >
          <span className="close" onClick={() => changeClass()}>
            &times;
          </span>
        </div>

        <div className="container-children">{children}</div>
      </div>
    </div>
  );
};
