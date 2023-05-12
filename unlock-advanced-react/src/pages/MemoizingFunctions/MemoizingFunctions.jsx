import React, { useEffect, useState } from "react";
import ArrowUp from "../../assets/icons/arrow-up.svg";
import { Button } from "../../components/Button/Button";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { Helper } from "../../components/Helper/Helper";
import { Loading } from "../../components/Loading/Loading";
import ViewportListener from "../../utils/checkViewport";
import "./MemoizingFunctions.css";
import { PokemonList } from "./PokemonList";

export const MemoizingFunctions = () => {
  const [showExplainer, setShowExplainer] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const viewportSize = ViewportListener();
  const [loading, setLoading] = useState(true);
  const [numberOfPokémon, setNumberOfPokémon] = useState(300);
  const [pokemonListValue, setPokemonListValue] = useState([]);
  const linkOfCode =
    "https://github.com/GuilhermeAgostin/Unlock-Advanced-React/tree/development/unlock-advanced-react/src/pages/MemoizingFunctions";

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

  useEffect(() => {
    if (pokemonListValue.length === numberOfPokémon) {
      setLoading(false);
    }
  }, [pokemonListValue]);

  return (
    <div
      className="main"
      style={{
        flexDirection:
          viewportSize && viewportSize !== "Desktop" ? "column" : "row",
        alignItems:
          viewportSize && viewportSize !== "Desktop" ? "center" : "flex-start",
      }}
    >
      <div
        className="revising-hooks-container"
        onTouchEnd={() => setMenuOpen(false)}
      >
        <a className="topic-titles notranslate">Memoizing Functions</a>
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
        React provides with one more memorizing function, the useCallback().
        <br />
        Which allows us to memorize a function, preventing React from recreating
        it when the component is re-rendered.
        <br />
        <br />
        The useCallback() hook accepts two arguments:
        <ul>
          <li>The first argument is the function we want to memorize;</li>
          <li>The second is a list of dependencies.</li>
        </ul>
        UseCallback() will only recreate the function if its list of
        dependencies changes.
        <br />
        Similar to the useEffect() hook, if an empty dependency array is passed
        to useCallback(), the function will only be created once after the first
        render.
        <br />
        <br />
        UseCallback() syntax example:
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
            {"{ useState, useCallback } "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">react</strong>
            {"';"}
            <br />
            <strong className="import-text">import </strong>
            {"MemoizedCounter "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">./Counter.jsx</strong>
            {"';"}
            <br />
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">Counter </strong>
            {"= () => {"}
            <br />
            <strong className="import-text">const </strong>
            {"["}
            <strong className="const-text">count </strong>,
            <strong className="const-text"> setCount</strong>
            {"] = "}
            <strong className="function-text">useState</strong>
            {"("}
            <strong className="code-text">0</strong>
            {");"}
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">increment </strong>
            {"= "}
            <strong className="function-text">useCallback</strong>
            {"(() => "}
            <strong className="const-text">setCount</strong>
            {"(("}
            <strong className="const-text">count</strong>
            {") => "}
            <strong className="const-text">count </strong>
            {"+ 1), []);"}
            <br />
            <strong className="import-text">return </strong>
            {"<"}
            <strong className="component-text">MemoizedCounter </strong>
            <strong className="function-text">onClick</strong>
            {"={"}
            <strong className="const-text">increment</strong>
            {"} />"}
            <br />
            {"};"}
          </code>
        </div>
        <br />
        In the example above, React will recreate the increment() function only
        when its list of dependencies changes. This is important because if{" "}
        {"<MemoizedCounter />"} is wrapped with React.memo() it will compare the
        onClick prop before and after each render to see if{" "}
        {"<MemoizedCounter />"} should be re-rendered. How will useCallback()
        persist the increment() function between the rendering phases,{" "}
        {"<MemoizedCounter />"} will only render in the assembly.
        <br />
        <br />
        On this page, I developed a list of Pokémon that accesses the Poké API
        (RESTful API) to retrieve various information about the Pokémon, such as
        name, type, attack strength, defense, HP, and more. To ensure optimal
        rendering performance of this list, I applied memoization techniques
        such as React.memo() to memoize a component called PokemonList and
        useCallback() to memoize a function called getPokemonInfo(). With these
        techniques, rendering 300 Pokémon at once doesn't become heavy because
        unnecessary re-renders are avoided.
        <br />
        <br />
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Memoizing Functions
        </a>
        <br />
      </Helper>

      <div
        className="container-total"
        style={{
          marginTop:
            viewportSize && viewportSize === "Desktop"
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
                : "5vw",
          }}
        >
          <button
            className="e-button"
            style={{
              backgroundColor: "#393f48",
              color: "#ffffff",
              minHeight: "6vh",
              maxWidth: "190px",
            }}
            onClick={() => setShowExplainer(!showExplainer)}
          >
            {showExplainer ? "Hide" : "Show"} Explainers
          </button>

          {viewportSize && viewportSize === "Desktop" ? <br /> : null}

          <p
            className="e-explainer"
            style={{
              opacity: showExplainer ? 1 : 0,
              color: "#ffffff",
              marginTop:
                viewportSize?.orientation === "portrait" ? "2vh" : "auto",
            }}
          >
            Test useCallback() by clicking the button to see the function for
            returning Pokémon info created only once after the first render
          </p>
        </div>

        {viewportSize && viewportSize === "Desktop" ? (
          <>
            <br />
            <br />
            <br />
          </>
        ) : null}

        <Loading loading={loading}></Loading>
        {viewportSize?.orientation === "portrait" ? null : <br />}
        <PokemonList
          pokemonQuantity={numberOfPokémon}
          setPokemonListValue={setPokemonListValue}
          pokemonListValue={pokemonListValue}
        ></PokemonList>
        <br />
      </div>
      <br />

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
        sectionMargin={"27vh 2vw 2vh"}
        sectionHeight={"114vh"}
        sectionMaxHeight={"950px"}
      >
        React provides with one more memorizing function, the useCallback().
        <br />
        Which allows us to memorize a function, preventing React from recreating
        it when the component is re-rendered.
        <br />
        <br />
        The useCallback() hook accepts two arguments:
        <ul>
          <li>The first argument is the function we want to memorize;</li>
          <li>The second is a list of dependencies.</li>
        </ul>
        UseCallback() will only recreate the function if its list of
        dependencies changes.
        <br />
        Similar to the useEffect() hook, if an empty dependency array is passed
        to useCallback(), the function will only be created once after the first
        render.
        <br />
        <br />
        UseCallback() syntax example:
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
            {"{ useState, useCallback } "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">react</strong>
            {"';"}
            <br />
            <strong className="import-text">import </strong>
            {"MemoizedCounter "}
            <strong className="import-text">from </strong>
            {"'"}
            <strong className="code-text">./Counter.jsx</strong>
            {"';"}
            <br />
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">Counter </strong>
            {"= () => {"}
            <br />
            <strong className="import-text">const </strong>
            {"["}
            <strong className="const-text">count </strong>,
            <strong className="const-text"> setCount</strong>
            {"] = "}
            <strong className="function-text">useState</strong>
            {"("}
            <strong className="code-text">0</strong>
            {");"}
            <br />
            <strong className="import-text">const </strong>
            <strong className="const-text">increment </strong>
            {"= "}
            <strong className="function-text">useCallback</strong>
            {"(() => "}
            <strong className="const-text">setCount</strong>
            {"(("}
            <strong className="const-text">count</strong>
            {") => "}
            <strong className="const-text">count </strong>
            {"+ 1), []);"}
            <br />
            <strong className="import-text">return </strong>
            {"<"}
            <strong className="component-text">MemoizedCounter </strong>
            <strong className="function-text">onClick</strong>
            {"={"}
            <strong className="const-text">increment</strong>
            {"} />"}
            <br />
            {"};"}
          </code>
        </div>
        <br />
        In the example above, React will recreate the increment() function only
        when its list of dependencies changes. This is important because if{" "}
        {"<MemoizedCounter />"} is wrapped with React.memo() it will compare the
        onClick prop before and after each render to see if{" "}
        {"<MemoizedCounter />"} should be re-rendered. How will useCallback()
        persist the increment() function between the rendering phases,{" "}
        {"<MemoizedCounter />"} will only render in the assembly.
        <br />
        <br />
        On this page, I developed a list of Pokémon that accesses the Poké API
        (RESTful API) to retrieve various information about the Pokémon, such as
        name, type, attack strength, defense, HP, and more. To ensure optimal
        rendering performance of this list, I applied memoization techniques
        such as React.memo() to memoize a component called PokemonList and
        useCallback() to memoize a function called getPokemonInfo(). With these
        techniques, rendering 300 Pokémon at once doesn't become heavy because
        unnecessary re-renders are avoided.
        <br />
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          Memoizing Functions
        </a>
        <br />
      </Helper>

      <Button
        floating={true}
        floatingIndex={1}
        positionFloatingHorizontally={"right"}
        backgroundColor={"#00D8FF"}
        size="small"
        handleClick={() => window.scrollTo(0, 0)}
        mobile={viewportSize ? viewportSize : "Desktop"}
      >
        <img className="arrow-up" src={ArrowUp}></img>
      </Button>
      <FloatingButton></FloatingButton>
    </div>
  );
};
