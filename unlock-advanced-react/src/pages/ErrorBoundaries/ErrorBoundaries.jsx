import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { logError } from "./error-tracking";
import ViewportListener from "../../utils/checkViewport";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import Restart from "../../assets/icons/restart.svg";

import "./ErrorBoundaries.css";
import { Helper } from "../../components/Helper/Helper";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback-container">
      <h2
        style={{
          color: "#000000",
          textAlign: "center",
          marginBlockEnd: 0,
        }}
      >
        An error was detected!
      </h2>
      <p
        style={{
          color: "#000000",
          textAlign: "center",
        }}
      >
        Error: {error.message}
      </p>
      <button id="resetErrorBoundary" onClick={resetErrorBoundary}>
        Reset <img src={Restart} style={{ marginLeft: "1vw" }}></img>
      </button>
      <br />
      <br />
    </div>
  );
}

function Switch({ switchNumber = 1 }) {
  const [getErrorPressed, setGetErrorPressed] = useState(false);
  const [counter, setCounter] = useState(0);

  if (getErrorPressed) {
    document.getElementById("error-container").style.display = "flex";
    throw new Error("Crashed!!!");
  }

  if (counter === 4) {
    document.getElementById("error-container").style.display = "flex";
    throw new Error("Crashed!!!");
  }

  const handleSwitchClick = () => {
    setCounter(counter + 1);
  };
  const handleGetErrorClick = () => {
    setGetErrorPressed(true);
  };

  return (
    <div className="switch">
      <div className="switch-container">
        <h5
          style={{
            marginBlockStart: "0.2em",
            marginBlockEnd: "0.2em",
            color: "#000",
          }}
        >
          Counter {switchNumber}
        </h5>

        {counter}
      </div>
      <div className="button-container">
        <button onClick={handleSwitchClick}>Increase value</button>
        <button
          onClick={handleGetErrorClick}
          style={{ backgroundColor: "#ff0000" }}
        >
          Get error
        </button>
      </div>
    </div>
  );
}

export const ErrorBoundaries = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const viewportSize = ViewportListener();

  function Mount() {
    scrollToTop();
  }

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    Mount();
  }, []);

  return (
    <div
      className="main"
      style={{
        flexDirection:
          viewportSize && viewportSize !== "Desktop" ? "column" : "row",
      }}
    >
      <div
        className="revising-hooks-container"
        onTouchEnd={() => setMenuOpen(false)}
      >
        <a className="topic-titles notranslate">Error Boundaries</a>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Mobile"}
      >
        Error boundaries are React components that catch runtime errors
        occurring in the child component tree and display a fallback UI instead
        of a blank screen, while logging the errors. They are often used around
        new features that haven't been thoroughly tested, enabling recovery from
        errors.
        <br />
        <br />
        To ensure the application is fully protected by our error boundaries, we
        must identify, store, and render the error information. Displaying a
        fallback UI improves the user experience.
        <br />
        <br />
        When an error occurs, developers need to see the error information and
        plan to prevent its occurrence. Error information can be displayed in
        various ways such as testing features, printing or logging the error, or
        sending it to a server for monitoring and debugging.
        <br />
        <br />
        On the current page, there are 4 switches, and pressing the error
        buttons for switches 1-3 will show a red popup with the error message
        and stack trace. Switch 4 is unprotected and will cause the entire
        application to crash and return an error. When we click on the button of
        increase value, it increases the count.The counter is programmed to
        throw an error when reaches 4.
        <br />
        <br />
        The fallback UI helps keep the rest of the app running, and the broken
        component can even be recovered by refreshing the page. Pressing a
        button element in the fallback UI calls the reset() function, which
        resets the error value to null and re-renders the ErrorBoundary
        component.
        <br />
        <br />
        In production applications, the reset() logic can be more robust, such
        as retrieving unsaved data, making an API call to reset state on a
        server or database.
        <br />
        <br />
        There is a VERY popular implementation package, react-error-boundary
        which allows us to export an ErrorBoundary component and more.
        <br />
        <br />
        Example of use the package with a custom errorBoundary component:
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#000000",
            padding: "4px",
            color: "#ffffff",
          }}
        >
          <code>
            <strong className="import-text">import</strong>
            {" { ErrorBoundary } "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">{"react-error-boundary"}</strong>
            {"'"};
            <br />
            <strong className="function-text">function </strong>
            <strong className="const-text">ErrorFallback</strong>
            {"() {"}
            <br />
            <strong className="import-text">return </strong>
            {"("}
            {"<"}
            <strong className="component-text">div</strong>
            {"><"}
            <strong className="component-text">h2</strong>
            {"> An error was encountered! </"}
            <strong className="component-text">h2</strong>
            {"></"}
            <strong className="component-text">div</strong>
            {">"}
            {");"}
            <br />
            {"}"}
            <br />
            <br />
            <strong className="function-text">function </strong>
            <strong className="const-text">App</strong>
            {"() {"}
            <br />
            <strong className="import-text">return </strong>
            {"("}
            {"<"}
            <strong className="component-text">ErrorBoundary </strong>
            <strong className="function-text">FallbackComponent</strong>
            {"={"}
            <strong className="const-text">ErrorFallback</strong>
            {"}><"}
            <strong className="component-text">MyComponent </strong>
            {"/></"}
            <strong className="component-text">ErrorBoundary</strong>
            {">"}
            {");"}
            <br />
            {"}"}
          </code>
        </div>
        <br />
        To use error boundaries effectively, they should be placed around new
        features that have not been fully tested yet. By doing this, errors can
        be detected, logged, and handled smoothly until the point where the
        error boundary is no longer needed.
        <br />
        <br />
        It's important to note that error boundaries can catch errors that occur
        during rendering, in lifecycle methods, and in constructors of the
        entire tree below them. However, they don't catch errors for event
        handlers, asynchronous code, server-side rendering, or errors thrown in
        the error boundary itself (rather than its children).
        <br />
        <br />
        *LINK OF CODE USED ON THIS PAGE*
      </Helper>

      <div className="container">
        <div id="error-container"></div>
        <ErrorBoundary onError={logError} FallbackComponent={ErrorFallback}>
          <div>
            <Switch switchNumber={1} />
            <Switch switchNumber={2} />
          </div>
        </ErrorBoundary>
        <div>
          <Switch switchNumber={3} />
        </div>
        <div>
          <Switch switchNumber={4} />
        </div>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
      >
        Error boundaries are React components that catch runtime errors
        occurring in the child component tree and display a fallback UI instead
        of a blank screen, while logging the errors. They are often used around
        new features that haven't been thoroughly tested, enabling recovery from
        errors.
        <br />
        <br />
        To ensure the application is fully protected by our error boundaries, we
        must identify, store, and render the error information. Displaying a
        fallback UI improves the user experience.
        <br />
        <br />
        When an error occurs, developers need to see the error information and
        plan to prevent its occurrence. Error information can be displayed in
        various ways such as testing features, printing or logging the error, or
        sending it to a server for monitoring and debugging.
        <br />
        <br />
        On the current page, there are 4 switches, and pressing the error
        buttons for switches 1-3 will show a red popup with the error message
        and stack trace. Switch 4 is unprotected and will cause the entire
        application to crash and return an error. When we click on the button of
        increase value, it increases the count.The counter is programmed to
        throw an error when reaches 4.
        <br />
        <br />
        The fallback UI helps keep the rest of the app running, and the broken
        component can even be recovered by refreshing the page. Pressing a
        button element in the fallback UI calls the reset() function, which
        resets the error value to null and re-renders the ErrorBoundary
        component.
        <br />
        <br />
        In production applications, the reset() logic can be more robust, such
        as retrieving unsaved data, making an API call to reset state on a
        server or database.
        <br />
        <br />
        There is a VERY popular implementation package, react-error-boundary
        which allows us to export an ErrorBoundary component and more.
        <br />
        <br />
        Example of use the package with a custom errorBoundary component:
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#000000",
            padding: "4px",
            color: "#ffffff",
          }}
        >
          <code>
            <strong className="import-text">import</strong>
            {" { ErrorBoundary } "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">{"react-error-boundary"}</strong>
            {"'"};
            <br />
            <strong className="function-text">function </strong>
            <strong className="const-text">ErrorFallback</strong>
            {"() {"}
            <br />
            <strong className="import-text">return </strong>
            {"("}
            {"<"}
            <strong className="component-text">div</strong>
            {"><"}
            <strong className="component-text">h2</strong>
            {"> An error was encountered! </"}
            <strong className="component-text">h2</strong>
            {"></"}
            <strong className="component-text">div</strong>
            {">"}
            {");"}
            <br />
            {"}"}
            <br />
            <br />
            <strong className="function-text">function </strong>
            <strong className="const-text">App</strong>
            {"() {"}
            <br />
            <strong className="import-text">return </strong>
            {"("}
            {"<"}
            <strong className="component-text">ErrorBoundary </strong>
            <strong className="function-text">FallbackComponent</strong>
            {"={"}
            <strong className="const-text">ErrorFallback</strong>
            {"}><"}
            <strong className="component-text">MyComponent </strong>
            {"/></"}
            <strong className="component-text">ErrorBoundary</strong>
            {">"}
            {");"}
            <br />
            {"}"}
          </code>
        </div>
        <br />
        To use error boundaries effectively, they should be placed around new
        features that have not been fully tested yet. By doing this, errors can
        be detected, logged, and handled smoothly until the point where the
        error boundary is no longer needed.
        <br />
        <br />
        It's important to note that error boundaries can catch errors that occur
        during rendering, in lifecycle methods, and in constructors of the
        entire tree below them. However, they don't catch errors for event
        handlers, asynchronous code, server-side rendering, or errors thrown in
        the error boundary itself (rather than its children).
        <br />
        <br />
        *LINK OF CODE USED ON THIS PAGE*
      </Helper>

      <FloatingButton></FloatingButton>
    </div>
  );
};
