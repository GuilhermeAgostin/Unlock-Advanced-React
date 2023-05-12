import ViewportListener from "../../utils/checkViewport";
import "./Pokedex.css";
import { useEffect, useState } from "react";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { Pokedex } from "./Pokedex";
import { Helper } from "../../components/Helper/Helper";

export const ReactContext = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const viewportSize = ViewportListener();
  const linkOfCode =
    "https://github.com/GuilhermeAgostin/Unlock-Advanced-React/tree/development/unlock-advanced-react/src/pages/ReactContext";

  function Mount() {
    window.scrollTo(0, 0);
  }

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
        <a className="topic-titles notranslate">React Context</a>
      </div>

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Mobile"}
      >
        In React applications, passing information from a parent component to a
        child component via props is common practice. However, when we need to
        pass this information through multiple components, the code can become
        confusing and difficult to read. This is where Context comes in.
        <br />
        <br />
        Context allows us to create a parent component that provides information
        to all child components below it, without the need for manual prop
        passing. This is particularly useful for sharing data that is considered
        "global", such as theme preferences or language settings.
        <br />
        <br />
        To use Context, we need to understand the provider and consumer pattern
        used by the React Context API. The provider component makes data
        available to all descendant components, while the consumer component
        accesses that data. By creating a React Context object using the
        React.createContext() function, we can easily share data between
        components in a more efficient and organized manner.
        <br />
        <br />
        <div style={{ backgroundColor: "#000000", padding: "4px" }}>
          <code>
            <strong className="import-text">const</strong>{" "}
            <strong className="const-text">MyThemeContext </strong>={" "}
            <strong className="import-text">React</strong>.
            <strong style={{ color: "#73c954" }}>createContext</strong>(
            <strong className="code-text">defaultValue</strong>
            );
          </code>
        </div>
        <br />
        <div
          style={{
            backgroundColor: "#d9d9d9",
            padding: ".5vw 1vw",
            borderRadius: "1vw",
          }}
        >
          Note: The defaultValue argument is only used when a component does not
          have a matching provider above it in the component tree.
        </div>
        <br />
        After creating the React Context object, the Provider component should
        be created to pass down a value prop to its descendant components.
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#d9d9d9",
            padding: ".5vw 1vw",
            borderRadius: "1vw",
          }}
        >
          Note: A provider in React can have multiple consumers, and whenever
          the value prop of the provider changes, all the descendant consumers
          of that provider will automatically receive the updated value.
        </div>
        <br />
        <div
          style={{
            backgroundColor: "#000000",
            padding: "4px",
            color: "#ffffff",
          }}
        >
          <code>
            {"<"}
            <strong className="component-text">MyThemeContext.Provider</strong>
            <strong className="function-text"> value</strong> =
            <strong style={{ color: "#707070" }}>
              {" {/* some value */}"}
            </strong>
            {">"}
          </code>
        </div>
        <br />
        I'm using React Context on this page to create a Pokédex (provider) with
        a list of Pokémon including their names, types, colors, and images. You
        can filter the list by sorting it in ascending or descending order, or
        selecting a specific Pokémon type. The information can also be shared
        with other components (consumers).
        <br />
        <br />
        Creation:
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
            ...
            <br />
            <strong className="export-text">export const</strong>{" "}
            <strong className="const-text">PokedexContext</strong> ={" "}
            <strong className="export-text">React</strong>.
            <strong className="function-text">createContext</strong>
            ();
            <br />
            ...
            <br />
            <strong className="export-text">export const</strong>{" "}
            <strong className="const-text">PokedexProvider</strong>
            {" = ({ "}
            <strong className="const-text">children</strong>,{" "}
            <strong className="const-text">pokemon</strong> {" )} => {"}
            <br />
            ...
            <br />
            <strong className="export-text">return</strong> {"("}
            <br />
            {"<"}
            <strong className="component-text">
              {"PokedexContext.Provider"}
            </strong>
            <br />
            <strong className="function-text"> value</strong> ={" {{"}
            <strong className="function-text"> pokemon</strong>
            {", "}
            <strong className="function-text"> type</strong>
            {", "}
            <strong className="function-text"> setType</strong>
            {", "}
            <strong className="function-text"> sortOrder</strong>
            {", "}
            <strong className="function-text"> setSortOrder</strong> {"}}"}
            {">"}
            <br />
            {"{ "}
            <strong className="const-text">children</strong>
            {" }"}
            <br />
            {"</"}
            <strong className="component-text">
              {"PokedexContext.Provider"}
            </strong>
            {">"}
            {" );"}
            <br />
            {"};"}
          </code>
        </div>
        <br />
        Consumption:
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
            {"<"}
            <strong className="component-text">PokedexProvider</strong>{" "}
            <strong className="function-text">pokemon</strong>
            {" = { "}
            <strong className="const-text">pokemon </strong>
            {"}>"}
            <br />
            ...
            <br />
            {"</"}
            <strong className="component-text">PokedexProvider</strong>
            {">"}
          </code>
        </div>
        <br />
        In summary, using React Context is recommended when we need to avoid
        prop drilling, which occurs when we pass a component's props through
        several other components.
        <br />
        <br />
        Prop drilling example:
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
            <strong className="export-text">export default </strong>
            <strong className="function-text">function </strong>
            <strong className="const-text">Panel</strong>
            {"( {"}
            <strong className="const-text">username</strong>
            {"} ) {"}
            <br />
            <strong className="export-text">return</strong>
            {" <"}
            <strong className="component-text">div</strong>
            {"><"}
            <strong className="component-text">Article </strong>
            <strong className="function-text">username</strong>
            {" = { "}
            <strong className="const-text">username</strong>
            {" } /></"}
            <strong className="component-text">div</strong>
            {">"}
            <br />
            {"}"}
          </code>
        </div>
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          React Context
        </a>
        <br />
      </Helper>

      <Pokedex />

      <Helper
        open={open}
        setOpen={setOpen}
        viewportSize={viewportSize}
        deviceType={"Desktop"}
      >
        In React applications, passing information from a parent component to a
        child component via props is common practice. However, when we need to
        pass this information through multiple components, the code can become
        confusing and difficult to read. This is where Context comes in.
        <br />
        <br />
        Context allows us to create a parent component that provides information
        to all child components below it, without the need for manual prop
        passing. This is particularly useful for sharing data that is considered
        "global", such as theme preferences or language settings.
        <br />
        <br />
        To use Context, we need to understand the provider and consumer pattern
        used by the React Context API. The provider component makes data
        available to all descendant components, while the consumer component
        accesses that data. By creating a React Context object using the
        React.createContext() function, we can easily share data between
        components in a more efficient and organized manner.
        <br />
        <br />
        <div style={{ backgroundColor: "#000000", padding: "4px" }}>
          <code>
            <strong className="import-text">const</strong>{" "}
            <strong className="const-text">MyThemeContext </strong>={" "}
            <strong className="import-text">React</strong>.
            <strong style={{ color: "#73c954" }}>createContext</strong>(
            <strong className="code-text">defaultValue</strong>
            );
          </code>
        </div>
        <br />
        <div
          style={{
            backgroundColor: "#d9d9d9",
            padding: ".5vw 1vw",
            borderRadius: "1vw",
          }}
        >
          Note: The defaultValue argument is only used when a component does not
          have a matching provider above it in the component tree.
        </div>
        <br />
        After creating the React Context object, the Provider component should
        be created to pass down a value prop to its descendant components.
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#d9d9d9",
            padding: ".5vw 1vw",
            borderRadius: "1vw",
          }}
        >
          Note: A provider in React can have multiple consumers, and whenever
          the value prop of the provider changes, all the descendant consumers
          of that provider will automatically receive the updated value.
        </div>
        <br />
        <div
          style={{
            backgroundColor: "#000000",
            padding: "4px",
            color: "#ffffff",
          }}
        >
          <code>
            {"<"}
            <strong className="component-text">MyThemeContext.Provider</strong>
            <strong className="function-text"> value</strong> =
            <strong style={{ color: "#707070" }}>
              {" {/* some value */}"}
            </strong>
            {">"}
          </code>
        </div>
        <br />
        I'm using React Context on this page to create a Pokédex (provider) with
        a list of Pokémon including their names, types, colors, and images. You
        can filter the list by sorting it in ascending or descending order, or
        selecting a specific Pokémon type. The information can also be shared
        with other components (consumers).
        <br />
        <br />
        Creation:
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
            ...
            <br />
            <strong className="export-text">export const</strong>{" "}
            <strong className="const-text">PokedexContext</strong> ={" "}
            <strong className="export-text">React</strong>.
            <strong className="function-text">createContext</strong>
            ();
            <br />
            ...
            <br />
            <strong className="export-text">export const</strong>{" "}
            <strong className="const-text">PokedexProvider</strong>
            {" = ({ "}
            <strong className="const-text">children</strong>,{" "}
            <strong className="const-text">pokemon</strong> {" )} => {"}
            <br />
            ...
            <br />
            <strong className="export-text">return</strong> {"("}
            <br />
            {"<"}
            <strong className="component-text">
              {"PokedexContext.Provider"}
            </strong>
            <br />
            <strong className="function-text"> value</strong> ={" {{"}
            <strong className="function-text"> pokemon</strong>
            {", "}
            <strong className="function-text"> type</strong>
            {", "}
            <strong className="function-text"> setType</strong>
            {", "}
            <strong className="function-text"> sortOrder</strong>
            {", "}
            <strong className="function-text"> setSortOrder</strong> {"}}"}
            {">"}
            <br />
            {"{ "}
            <strong className="const-text">children</strong>
            {" }"}
            <br />
            {"</"}
            <strong className="component-text">
              {"PokedexContext.Provider"}
            </strong>
            {">"}
            {" );"}
            <br />
            {"};"}
          </code>
        </div>
        <br />
        Consumption:
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
            {"<"}
            <strong className="component-text">PokedexProvider</strong>{" "}
            <strong className="function-text">pokemon</strong>
            {" = { "}
            <strong className="const-text">pokemon </strong>
            {"}>"}
            <br />
            ...
            <br />
            {"</"}
            <strong className="component-text">PokedexProvider</strong>
            {">"}
          </code>
        </div>
        <br />
        In summary, using React Context is recommended when we need to avoid
        prop drilling, which occurs when we pass a component's props through
        several other components.
        <br />
        <br />
        Prop drilling example:
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
            <strong className="export-text">export default </strong>
            <strong className="function-text">function </strong>
            <strong className="const-text">Panel</strong>
            {"( {"}
            <strong className="const-text">username</strong>
            {"} ) {"}
            <br />
            <strong className="export-text">return</strong>
            {" <"}
            <strong className="component-text">div</strong>
            {"><"}
            <strong className="component-text">Article </strong>
            <strong className="function-text">username</strong>
            {" = { "}
            <strong className="const-text">username</strong>
            {" } /></"}
            <strong className="component-text">div</strong>
            {">"}
            <br />
            {"}"}
          </code>
        </div>
        <br />
        Link of the code used on this page in GitHub:&nbsp;
        <a href={linkOfCode} style={{ textDecoration: "underline" }}>
          React Context
        </a>
        <br />
      </Helper>

      <FloatingButton></FloatingButton>
    </div>
  );
};
