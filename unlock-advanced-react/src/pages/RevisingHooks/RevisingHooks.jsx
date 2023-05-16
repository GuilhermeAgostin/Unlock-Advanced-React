import { Counter } from "../../components/Counter/Counter";
import ViewportListener from "../../utils/checkViewport";
import "./RevisingHooks.css";
import { useEffect, useState } from "react";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import { Helper } from "../../components/Helper/Helper";

export const RevisingHooks = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const viewportSize = ViewportListener();
  const linkOfCode =
    "https://github.com/GuilhermeAgostin/Unlock-Advanced-React/tree/development/unlock-advanced-react/src/pages/RevisingHooks";

  function Mount() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    Mount();
  }, []);

  return (
    <div
      className="main-revising-hooks"
      style={{
        flexDirection:
          viewportSize && viewportSize !== "Desktop" ? "column" : "row",
      }}
    >
      <div
        className="revising-hooks-container"
        onTouchEnd={() => setMenuOpen(false)}
      >
        <h1 className="topic-titles notranslate">Revising Hooks</h1>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Mobile"}
      >
        As previously mentioned, this section will cover the use of the
        useEffect() hook and how it works.
        <br />
        The first thing to note is that this hook allows us to execute effect
        functions after rendering, such as API requests, for example.
        <br />
        It accepts two arguments:
        <ul>
          <li>An callback function, which runs after the component renders;</li>
          <li>
            A dependency array that can be empty or contain some value. The
            dependency array determines how often the effect function is
            executed.
          </li>
        </ul>
        If we pass an empty array of dependencies as the second argument of
        useEffect, the effect function will only be executed after the first
        rendering.
        <br />
        <br />
        <div style={{ backgroundColor: "#000000", padding: "4px" }}>
          <code>
            <strong style={{ color: "#73c954" }}>{"useEffect"}</strong>
            {"(()=> {"}
            <br />
            <strong style={{ color: "#73c954" }}>{"getUsers"}</strong>()
            <br />
            {"},[]);"}{" "}
            <strong className="comment-text">//empty dependency array</strong>
          </code>
        </div>
        <br />
        On the other hand, if we pass some value in the dependency array, the
        effect function will be executed whenever the value in the array
        changes.
        <br />
        <br />
        <div style={{ backgroundColor: "#000000", padding: "4px" }}>
          <code>
            <strong style={{ color: "#941fd3" }}>const</strong> [
            <strong className="const-text">count</strong>,
            <strong className="const-text"> setCount</strong>] =
            <strong style={{ color: "#73c954" }}> useState</strong>(
            <strong style={{ color: "#f2eb1d" }}>0</strong>);
            <br />
            <strong style={{ color: "#73c954" }}>{"useEffect"}</strong>
            {"(()=> {"}
            <br />
            <strong style={{ color: "#941fd3" }}>{"console"}</strong>.
            <strong style={{ color: "#73c954" }}>{"log"}</strong>
            {"(`"}
            <strong style={{ color: "#f2eb1d" }}>{"Count value: "}</strong>
            {"${"}
            <strong style={{ color: "#941fd3" }}>{"count"}</strong>
            {"}`)"}
            <br />
            {"}, ["}
            <strong className="const-text">count</strong>
            {"]);"}
            <strong className="comment-text">
              //dependency array with a dependency
            </strong>
          </code>
        </div>
        <br />
        As an example, I created a function called isPrime() using useEffect().
        This function defines whether an input value is a prime number or not,
        and if confirmed to be a prime number, it fills the square part of the
        screen with another color.
        <br />
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Revising Hooks
        </a>
        <br />
      </Helper>

      <Counter
        onTouchEnd={() => setMenuOpen(false)}
        seeExplainers={open}
        windowSize={viewportSize}
      ></Counter>

      <br />

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
      >
        As previously mentioned, this section will cover the use of the
        useEffect() hook and how it works.
        <br />
        The first thing to note is that this hook allows us to execute effect
        functions after rendering, such as API requests, for example.
        <br />
        It accepts two arguments:
        <ul>
          <li>An callback function, which runs after the component renders;</li>
          <li>
            A dependency array that can be empty or contain some value. The
            dependency array determines how often the effect function is
            executed.
          </li>
        </ul>
        If we pass an empty array of dependencies as the second argument of
        useEffect, the effect function will only be executed after the first
        rendering.
        <br />
        <br />
        <div style={{ backgroundColor: "#000000", padding: "4px" }}>
          <code>
            <strong style={{ color: "#73c954" }}>{"useEffect"}</strong>
            {"(()=> {"}
            <br />
            <strong style={{ color: "#73c954" }}>{"getUsers"}</strong>()
            <br />
            {"},[]);"}{" "}
            <strong className="comment-text">//empty dependency array</strong>
          </code>
        </div>
        <br />
        On the other hand, if we pass some value in the dependency array, the
        effect function will be executed whenever the value in the array
        changes.
        <br />
        <br />
        <div style={{ backgroundColor: "#000000", padding: "4px" }}>
          <code>
            <strong style={{ color: "#941fd3" }}>const</strong> [
            <strong className="const-text">count</strong>,
            <strong className="const-text"> setCount</strong>] =
            <strong style={{ color: "#73c954" }}> useState</strong>(
            <strong style={{ color: "#f2eb1d" }}>0</strong>);
            <br />
            <strong style={{ color: "#73c954" }}>{"useEffect"}</strong>
            {"(()=> {"}
            <br />
            <strong style={{ color: "#941fd3" }}>{"console"}</strong>.
            <strong style={{ color: "#73c954" }}>{"log"}</strong>
            {"(`"}
            <strong style={{ color: "#f2eb1d" }}>{"Count value: "}</strong>
            {"${"}
            <strong style={{ color: "#941fd3" }}>{"count"}</strong>
            {"}`)"}
            <br />
            {"}, ["}
            <strong className="const-text">count</strong>
            {"]);"}
            <strong className="comment-text">
              //dependency array with a dependency
            </strong>
          </code>
        </div>
        <br />
        As an example, I created a function called isPrime() using useEffect().
        This function defines whether an input value is a prime number or not,
        and if confirmed to be a prime number, it fills the square part of the
        screen with another color.
        <br />
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Revising Hooks
        </a>
        <br />
      </Helper>

      <FloatingButton></FloatingButton>
    </div>
  );
};
