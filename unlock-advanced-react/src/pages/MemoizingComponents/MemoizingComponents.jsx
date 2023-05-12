import "./MemoizingComponents.css";
import "../MemoizingValues/MemoizingValues.css";
import React, { useEffect, useState } from "react";
import ViewportListener from "../../utils/checkViewport";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import HeavyComponent from "./HeavyComponent";
import { Helper } from "../../components/Helper/Helper";

export const MemoizingComponents = () => {
  const [showExplainer, setShowExplainer] = useState(true);
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
        flexDirection: viewportSize
          ? viewportSize !== "Desktop"
            ? "column"
            : "row"
          : "row",
        alignItems: viewportSize
          ? viewportSize === "Desktop"
            ? "flex-start"
            : "center"
          : "center",
      }}
    >
      <div
        className="revising-hooks-container"
        onTouchEnd={() => setMenuOpen(false)}
      >
        <a className="topic-titles notranslate">Memoizing Component</a>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Mobile"}
        helperTopSize={
          viewportSize?.orientation === "portrait" ? "25vh" : "38vh"
        }
      >
        To keep the app up-to-date, React will re-render all child components
        when it detects a change in the parent component. However, this can
        cause performance issues if a child component renders something
        expensive, like thousands of elements. To solve this problem, React
        offers a higher-order component called React.memo().
        <br />
        <br />
        A higher-order component is a component that takes another component as
        an argument to add functionality. React.memo() will only trigger a
        re-render of the passed component if its properties have changed,
        improving performance by avoiding unnecessary re-renders.
        <br />
        <br />
        React.memo() syntax example:
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
            <strong className="import-text">import </strong>
            React
            <strong className="import-text"> from </strong> {"'"}
            <strong className="code-text">react</strong>
            {"';"}
            <br />
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">MemoizedListComponent </strong>
            {"= "}
            <strong className="import-text">React</strong>
            {"."}
            <strong className="function-text">memo</strong>
            {"(("}
            <strong className="const-text">props</strong>
            {") => {"}
            <br />
            <strong className="import-text">const </strong>
            {"{ "}
            <strong className="const-text">longList </strong>
            {"} = "}
            <strong className="const-text">props</strong>
            {";"}
            <br />
            <strong className="import-text">return </strong>
            <strong className="const-text">longList</strong>
            {"."}
            <strong className="function-text">map</strong>
            {"("}
            <strong className="const-text">item</strong>
            {" => <"}
            <strong className="component-text">li</strong>
            {">{"}
            <strong className="const-text">item</strong>
            {"}</"}
            <strong className="component-text">li</strong>
            {">);"}
            <br />
            {"});"}
          </code>
        </div>
        <br />
        In the previous example, I passed a function component to React.memo()
        as the first argument. This way, React only re-renders the component if
        its props have changed, comparing them before and after each rendering
        phase. Then, I assigned the result of React.memo() to a
        MemoizedListComponent, which can be used in other components.
        <br />
        <br />
        To improve performance, React superficially compares the memoized
        component props before each render. However, for more complex props like
        objects and arrays, we can provide a diff function as the second
        argument to React.memo(). This ensures that they are faithfully
        compared, resulting in a significant performance benefit for components
        that take longer to render.
        <br />
        <br />
        Based on all the points mentioned here, I created a heavy React
        component that generates 2000 HTML div elements with random colors and
        wrapped them in a higher-order React.memo() component. This ensures that
        the component passed to it will only be re-rendered if its properties
        have changed, avoiding unnecessary re-renders.
        <br />
        <br />
        *LINK OF CODE USED ON THIS PAGE*
      </Helper>

      <div
        className="memoizing-container"
        style={{
          marginTop:
            viewportSize === "Desktop"
              ? "26vh"
              : viewportSize?.orientation === "portrait"
              ? "36vh"
              : "49vh",
        }}
      >
        <div
          className="e-header"
          style={{
            height:
              viewportSize && viewportSize === "Desktop"
                ? "4vw"
                : viewportSize?.orientation === "portrait"
                ? "40vw"
                : "6vw",
          }}
        >
          <button
            className="e-button"
            onClick={() => setShowExplainer(!showExplainer)}
          >
            {showExplainer ? "Hide" : "Show"} Explainers
          </button>

          <p
            className="e-explainer"
            style={{
              opacity: showExplainer ? 1 : 0,
              marginTop:
                viewportSize?.orientation === "portrait" ? "1.5vh" : "auto",
            }}
          >
            Explore the power of React.memo() by clicking the button and see how
            it intelligently skips re-rendering unchanged component props
          </p>
        </div>

        {viewportSize && viewportSize === "Desktop" ? (
          <br />
        ) : viewportSize?.orientation === "landscape" ? (
          <>
            <br />
            <br />
            <br />
          </>
        ) : (
          <br />
        )}

        {viewportSize && viewportSize === "Desktop" ? <br /> : null}

        <HeavyComponent></HeavyComponent>
        <br />
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
        sectionMargin={"12% 2vw 1% 2vw"}
        sectionHeight={"114vh"}
      >
        To keep the app up-to-date, React will re-render all child components
        when it detects a change in the parent component. However, this can
        cause performance issues if a child component renders something
        expensive, like thousands of elements. To solve this problem, React
        offers a higher-order component called React.memo().
        <br />
        <br />
        A higher-order component is a component that takes another component as
        an argument to add functionality. React.memo() will only trigger a
        re-render of the passed component if its properties have changed,
        improving performance by avoiding unnecessary re-renders.
        <br />
        <br />
        React.memo() syntax example:
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
            <strong className="import-text">import </strong>
            React
            <strong className="import-text"> from </strong> {"'"}
            <strong className="code-text">react</strong>
            {"';"}
            <br />
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">MemoizedListComponent </strong>
            {"= "}
            <strong className="import-text">React</strong>
            {"."}
            <strong className="function-text">memo</strong>
            {"(("}
            <strong className="const-text">props</strong>
            {") => {"}
            <br />
            <strong className="import-text">const </strong>
            {"{ "}
            <strong className="const-text">longList </strong>
            {"} = "}
            <strong className="const-text">props</strong>
            {";"}
            <br />
            <strong className="import-text">return </strong>
            <strong className="const-text">longList</strong>
            {"."}
            <strong className="function-text">map</strong>
            {"("}
            <strong className="const-text">item</strong>
            {" => <"}
            <strong className="component-text">li</strong>
            {">{"}
            <strong className="const-text">item</strong>
            {"}</"}
            <strong className="component-text">li</strong>
            {">);"}
            <br />
            {"});"}
          </code>
        </div>
        <br />
        In the previous example, I passed a function component to React.memo()
        as the first argument. This way, React only re-renders the component if
        its props have changed, comparing them before and after each rendering
        phase. Then, I assigned the result of React.memo() to a
        MemoizedListComponent, which can be used in other components.
        <br />
        <br />
        To improve performance, React superficially compares the memoized
        component props before each render. However, for more complex props like
        objects and arrays, we can provide a diff function as the second
        argument to React.memo(). This ensures that they are faithfully
        compared, resulting in a significant performance benefit for components
        that take longer to render.
        <br />
        <br />
        Based on all the points mentioned here, I created a heavy React
        component that generates 2000 HTML div elements with random colors and
        wrapped them in a higher-order React.memo() component. This ensures that
        the component passed to it will only be re-rendered if its properties
        have changed, avoiding unnecessary re-renders.
        <br />
        <br />
        *LINK OF CODE USED ON THIS PAGE*
      </Helper>

      <FloatingButton></FloatingButton>
    </div>
  );
};
