import { useState } from "react";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { Helper } from "../../components/Helper/Helper";
import ViewportListener from "../../utils/checkViewport";
import "./MemoizingValues.css";
import { ResultSignsCalculator } from "./ResultSignsCalculator";

const MemoizingValues = () => {
  const [day, setDay] = useState(undefined);
  const [month, setMonth] = useState(undefined);
  const [showExplainer, setShowExplainer] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const viewportSize = ViewportListener();
  const linkOfCode =
    "https://github.com/GuilhermeAgostin/Unlock-Advanced-React/tree/development/unlock-advanced-react/src/pages/MemoizingValues";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <a className="topic-titles notranslate">Memoizing Values</a>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Mobile"}
      >
        When a React component is loaded, it not only renders the JSX code, but
        also evaluates all the functions inside the component. Some components
        require functions that take a long time to run, such as large database
        queries over a slow network. This can lead to a decrease in performance
        if the component is re-rendered frequently.
        <br />
        <br />
        However, often the data returned by API calls doesn't change between
        component re-renders. To optimize these expensive functions, we can use
        a hook called useMemo(). This hook uses a technique called memoization,
        which caches the result of a function call and only calls the function
        again when its dependencies change.
        <br />
        <br />
        To use useMemo(), we pass two arguments:{" "}
        <ul>
          <li>A function that returns the result we want to cache;</li>
          <li>An array of dependencies that the function depends on.</li>
        </ul>
        If any of the dependencies change, React will recalculate the cached
        result. By using useMemo(), we can optimize our components and improve
        the performance of our application.
        <br />
        <br />
        Hook syntax example:
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
            {"{ useMemo } "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">react</strong>
            {"';"}
            <br />
            <br />
            <strong className="function-text">function </strong>
            <strong className="const-text">DatabaseSeach</strong>
            {"({ "}
            <strong className="const-text">query</strong>
            {" }) {"}
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">result </strong>
            {"= "}
            <strong className="function-text">useMemo</strong>
            {"(() => {"}
            <br />
            <strong className="import-text">return </strong>
            <strong className="function-text">bigDatabaseSearch</strong>
            {"("}
            <strong className="const-text">query</strong>
            {");"}
            <br />
            {"}, ["}
            <strong className="const-text">query</strong>
            {"]);"}
            <br />
            <br />
            <strong className="import-text">return </strong>
            <strong className="const-text">result</strong>;
            <br />
            {"}"}
          </code>
        </div>
        <br />
        In the example above, the DatabaseSearch component uses an expensive
        function called bigDatabaseSearch(query). However, by using the
        useMemo() hook, the result constant will only be recalculated if the
        query dependency changes.
        <br />
        <br />
        In addition to the example mentioned above, I have created a component
        that calculates your Zodiac sign based on your birth date (day and
        month). In this case, I am caching the result of the function that
        performs the calculation, assuming that the function is computationally
        expensive and that multiple re-renders involving this component could
        lead to a significant performance loss in your application. By caching
        the result, I avoid unnecessary re-calculation during component
        rendering.
        <br />
        <br />
        When using useMemo(), keep the following points in mind:
        <br />
        <ul>
          <li>
            The function passed to useMemo() is called when the component is
            mounted, so it will always be called at least once;
          </li>
          <li>
            The list of dependencies works similarly to useEffect(). If the list
            is empty, the function will only be executed on the first render of
            the component.
          </li>
        </ul>
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Memoizing Values
        </a>
        <br />
      </Helper>

      <section
        className="memoizing-container"
        style={{
          marginTop:
            viewportSize === "Desktop"
              ? "26vh"
              : viewportSize?.orientation === "portrait"
              ? "36vh"
              : "36vh",
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
                : "2vw",
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
                viewportSize?.orientation === "portrait" ? "2vh" : "auto",
              textAlign: "justify",
            }}
          >
            Experience the power of useMemo()! Click the button above to see the
            zodiac sign calculator result caching in action
          </p>
        </div>

        {viewportSize && viewportSize === "Desktop" ? (
          <>
            <br />
            <br />
            <br />
          </>
        ) : null}

        <div className="e-container-total">
          {viewportSize && viewportSize === "Desktop" ? (
            <div
              className="e-container"
              style={{ height: !!day && !!month ? "53vh" : "20vh" }}
            >
              <div className="zodiac-calculator-header">
                <h2>Zodiac Calculator</h2>
                <p>See which sign you belong to</p>
              </div>

              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <section className="date-selector">
                  <div className="month">
                    <label className="birth-label">
                      Select your birth month
                    </label>
                    <select
                      name="month"
                      value={month}
                      onChange={(e) => {
                        setMonth(parseInt(e.target.value));
                      }}
                    >
                      <option value={undefined}>Month</option>
                      <option value={1}>January</option>
                      <option value={2}>February</option>
                      <option value={3}>March</option>
                      <option value={4}>April</option>
                      <option value={5}>May</option>
                      <option value={6}>June</option>
                      <option value={7}>July</option>
                      <option value={8}>August</option>
                      <option value={9}>September</option>
                      <option value={10}>October</option>
                      <option value={11}>November</option>
                      <option value={12}>December</option>
                    </select>
                  </div>

                  <div className="day">
                    <label className="birth-label">Select your birth day</label>
                    <select
                      name="day"
                      value={day}
                      onChange={(e) => {
                        setDay(parseInt(e.target.value));
                      }}
                    >
                      <option value={undefined}>Day</option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                      <option value={6}>06</option>
                      <option value={7}>07</option>
                      <option value={8}>08</option>
                      <option value={9}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-date">
                    Submit
                  </button>
                </section>
              </form>

              <ResultSignsCalculator
                day={day}
                month={month}
                setShowExplainer={showExplainer}
              />
            </div>
          ) : (
            <div
              className="e-container"
              style={{
                height:
                  viewportSize?.orientation === "landscape" && !!day && !!month
                    ? "104vh"
                    : !!day && !!month
                    ? "120vh"
                    : "20vh",
              }}
            >
              <div className="zodiac-calculator-header">
                <h2>Zodiac Calculator</h2>
                <p>See which sign you belong to</p>
              </div>

              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <section className="date-selector">
                  <div className="month">
                    <label className="birth-label">
                      Select your birth month
                    </label>
                    <select
                      name="month"
                      value={month}
                      onChange={(e) => {
                        setMonth(parseInt(e.target.value));
                      }}
                    >
                      <option value={undefined}>Month</option>
                      <option value={1}>January</option>
                      <option value={2}>February</option>
                      <option value={3}>March</option>
                      <option value={4}>April</option>
                      <option value={5}>May</option>
                      <option value={6}>June</option>
                      <option value={7}>July</option>
                      <option value={8}>August</option>
                      <option value={9}>September</option>
                      <option value={10}>October</option>
                      <option value={11}>November</option>
                      <option value={12}>December</option>
                    </select>
                  </div>

                  <div className="day">
                    <label className="birth-label">Select your birth day</label>
                    <select
                      name="day"
                      value={day}
                      onChange={(e) => {
                        setDay(parseInt(e.target.value));
                      }}
                    >
                      <option value={undefined}>Day</option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                      <option value={6}>06</option>
                      <option value={7}>07</option>
                      <option value={8}>08</option>
                      <option value={9}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-date">
                    Submit
                  </button>
                </section>
              </form>

              <ResultSignsCalculator
                day={day}
                month={month}
                setShowExplainer={showExplainer}
              />
            </div>
          )}
        </div>
      </section>

      <br />

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
        sectionMargin={"22vh 2vw 0 2vw"}
        sectionHeight={"80vh"}
      >
        When a React component is loaded, it not only renders the JSX code, but
        also evaluates all the functions inside the component. Some components
        require functions that take a long time to run, such as large database
        queries over a slow network. This can lead to a decrease in performance
        if the component is re-rendered frequently.
        <br />
        <br />
        However, often the data returned by API calls doesn't change between
        component re-renders. To optimize these expensive functions, we can use
        a hook called useMemo(). This hook uses a technique called memoization,
        which caches the result of a function call and only calls the function
        again when its dependencies change.
        <br />
        <br />
        To use useMemo(), we pass two arguments:{" "}
        <ul>
          <li>A function that returns the result we want to cache;</li>
          <li>An array of dependencies that the function depends on.</li>
        </ul>
        If any of the dependencies change, React will recalculate the cached
        result. By using useMemo(), we can optimize our components and improve
        the performance of our application.
        <br />
        <br />
        Hook syntax example:
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
            {"{ useMemo } "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">react</strong>
            {"';"}
            <br />
            <br />
            <strong className="function-text">function </strong>
            <strong className="const-text">DatabaseSeach</strong>
            {"({ "}
            <strong className="const-text">query</strong>
            {" }) {"}
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">result </strong>
            {"= "}
            <strong className="function-text">useMemo</strong>
            {"(() => {"}
            <br />
            <strong className="import-text">return </strong>
            <strong className="function-text">bigDatabaseSearch</strong>
            {"("}
            <strong className="const-text">query</strong>
            {");"}
            <br />
            {"}, ["}
            <strong className="const-text">query</strong>
            {"]);"}
            <br />
            <br />
            <strong className="import-text">return </strong>
            <strong className="const-text">result</strong>;
            <br />
            {"}"}
          </code>
        </div>
        <br />
        In the example above, the DatabaseSearch component uses an expensive
        function called bigDatabaseSearch(query). However, by using the
        useMemo() hook, the result constant will only be recalculated if the
        query dependency changes.
        <br />
        <br />
        In addition to the example mentioned above, I have created a component
        that calculates your Zodiac sign based on your birth date (day and
        month). In this case, I am caching the result of the function that
        performs the calculation, assuming that the function is computationally
        expensive and that multiple re-renders involving this component could
        lead to a significant performance loss in your application. By caching
        the result, I avoid unnecessary re-calculation during component
        rendering.
        <br />
        <br />
        When using useMemo(), keep the following points in mind:
        <br />
        <ul>
          <li>
            The function passed to useMemo() is called when the component is
            mounted, so it will always be called at least once;
          </li>
          <li>
            The list of dependencies works similarly to useEffect(). If the list
            is empty, the function will only be executed on the first render of
            the component.
          </li>
        </ul>
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Memoizing Values
        </a>
        <br />
      </Helper>

      <FloatingButton></FloatingButton>
    </div>
  );
};

export default MemoizingValues;
