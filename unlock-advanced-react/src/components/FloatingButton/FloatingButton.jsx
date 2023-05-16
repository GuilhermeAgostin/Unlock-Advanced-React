import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToNextPage, goToPreviousPage } from "../../utils/functions";
import Menu from "../../assets/icons/menu.svg";
import ArrowBack from "../../assets/icons/arrow_back.svg";
import ArrowForward from "../../assets/icons/arrow_forward.svg";
import X from "../../assets/icons/close.svg";
import "./FloatingButton.css";

export const FloatingButton = () => {
  const [test, setTest] = useState(0);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const currentURL = "." + window.location.pathname;
  const currentUrl2 = currentURL.split("/")[2];

  function execute() {
    navigate(goToNextPage(currentUrl2));
  }

  function executeBack() {
    navigate(goToPreviousPage(currentUrl2));
  }

  const openMenu = () => {
    setTest(1);
    setOpen(!open);
  };

  return (
    <>
      <div
        id="menu"
        className="menu"
        onClick={() => {
          openMenu();
        }}
        style={{
          backgroundImage: open ? `url(${X})` : `url(${Menu})`,
          backgroundColor: open ? "#db6767" : "#01539D",
          boxShadow: "none",
          transition: "all 100ms",
        }}
      ></div>
      <div
        className="menu-2"
        style={{
          animation: open
            ? "open ease 400ms forwards"
            : test > 0
            ? "close ease 400ms forwards"
            : "",
        }}
        onClick={() => executeBack()}
      >
        <img src={ArrowBack}></img>
      </div>
      <div
        className="menu-3"
        onClick={() => execute()}
        style={{
          animation: open
            ? "open2 ease 400ms forwards"
            : test > 0
            ? "close2 ease 400ms forwards"
            : "",
        }}
      >
        <img src={ArrowForward}></img>
      </div>
    </>
  );
};

export default FloatingButton;
