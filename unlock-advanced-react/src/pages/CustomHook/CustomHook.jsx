import React, { useState } from "react";
import { CountryDisplay } from "./CountryDisplay.jsx";
import "./CustomHook.css";
import ViewportListener from "../../utils/checkViewport.js";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";
import { Helper } from "../../components/Helper/Helper.jsx";

export const CustomHook = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const viewportSize = ViewportListener();
  const linkOfCode =
    "https://github.com/GuilhermeAgostin/Unlock-Advanced-React/tree/development/unlock-advanced-react/src/pages/CustomHook";

  return (
    <div className="main-custom-hook">
      <div
        className="revising-hooks-container"
        onTouchEnd={() => setMenuOpen(false)}
      >
        <a className="topic-titles notranslate">Custom Hook</a>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Mobile"}
      >
        On this page, a custom hook was implemented to determine which country
        you are accessing the site from, but of course, only if YOU allow it.
        Then, the browser will request access to your location at the moment you
        interact with the page in question, Custom Hooks.
        <br />
        After this implementation, at least two conclusions can be drawn:
        <ul>
          <li>
            Custom hooks improve the performance of our code by reducing the use
            of expansive functions;
          </li>
          <li>
            Custom hooks should only be called at the top level of a function
            component.
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "red",
            color: "#ffffff",
            padding: ".5vw 1vw",
            borderRadius: "1vw",
          }}
        >
          NO DATA RELATED TO ANY USER'S LOCATION IS STORED!
        </div>
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Custom Hook
        </a>
        <br />
      </Helper>

      <div className="world" onTouchEnd={() => setMenuOpen(false)}>
        <div className="img"></div>

        <CountryDisplay />
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
      >
        On this page, a custom hook was implemented to determine which country
        you are accessing the site from, but of course, only if YOU allow it.
        Then, the browser will request access to your location at the moment you
        interact with the page in question, Custom Hooks.
        <br />
        After this implementation, at least two conclusions can be drawn:
        <ul>
          <li>
            Custom hooks improve the performance of our code by reducing the use
            of expansive functions;
          </li>
          <li>
            Custom hooks should only be called at the top level of a function
            component.
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "red",
            color: "#ffffff",
            padding: ".5vw 1vw",
            borderRadius: "1vw",
          }}
        >
          NO DATA RELATED TO ANY USER'S LOCATION IS STORED!
        </div>
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Custom Hook
        </a>
        <br />
      </Helper>

      <FloatingButton></FloatingButton>
    </div>
  );
};
