import "./Helper.css";
import { Modal } from "../Modal/Modal";

export const Helper = ({
  children,
  viewportSize,
  open,
  setOpen,
  sectionMargin,
  sectionPadding,
  sectionHeight,
  sectionMaxHeight,
  deviceType,
  helperTopSize,
}) => {
  return viewportSize &&
    viewportSize === "Desktop" &&
    deviceType === "Desktop" ? (
    <section
      className="explainers"
      style={{
        margin: sectionMargin,
        height: sectionHeight,
        maxHeight: sectionMaxHeight,
        padding: sectionPadding,
      }}
    >
      <div className="explainers-container">
        <h5 className="explainers-text">{children}</h5>
      </div>
    </section>
  ) : viewportSize && viewportSize !== "Desktop" && deviceType === "Mobile" ? (
    <>
      <div
        className="helper"
        onClick={() => setOpen(true)}
        style={{
          top: helperTopSize,
        }}
      >
        <a className="helper-title">Why do I see this page?</a>
        <a className="emoji">&nbsp;🤔</a>
      </div>
      <Modal openModal={open} setOpenModal={setOpen}>
        <section
          className="explainers"
          style={{ margin: ".5vh 0vw 1vh 0vw" }}
        >
          <div className="explainers-container">
            <h5 className="explainers-text-mobile">{children}</h5>
          </div>
        </section>
      </Modal>
    </>
  ) : null;
};
