import React, { useEffect, useRef, useState } from "react";
import Calendar from "../../assets/icons/calendar.svg";
import Clock from "../../assets/icons/clock.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Mail from "../../assets/icons/mail.svg";
import Person from "../../assets/icons/person.svg";
import Phone from "../../assets/icons/phone.svg";
import Stars from "../../assets/icons/stars.svg";
import Twitter from "../../assets/icons/twitter.svg";
import AfricanBurger from "../../assets/images/african-burger.svg";
import AmericanBurger from "../../assets/images/american-burger.jpg";
import AustralianBurger from "../../assets/images/australian-burger.svg";
import FrenchBurger from "../../assets/images/french-burger.svg";
import GermanBurger from "../../assets/images/german-burger.svg";
import ItalianBurger from "../../assets/images/italian-burger.svg";
import JapaneseBurger from "../../assets/images/japanese-burger.svg";
import MexicanBurger from "../../assets/images/mexican-burger.svg";
import Store1 from "../../assets/images/store-1.jpg";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { Modal } from "../../components/Modal/Modal";
import { MoreIconHorizontally } from "../../components/MoreIconHorizontally/MoreIconHorizontally";
import ViewportListener from "../../utils/checkViewport";
import "./CodeSplittingModules.css";

const CodeSplittingModules = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const viewportSize = ViewportListener();
  const options = ["1 people", "2 peoples", "3 peoples", "4+ peoples"];
  const [peopleQuantity, setPeopleQuantity] = useState(options[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);

  const elem = useRef("");
  const linkOfCode =
    "https://github.com/GuilhermeAgostin/Unlock-Advanced-React/tree/development/unlock-advanced-react/src/pages/CodeSplittingModules";

  const MenuList = [
    {
      foodName: "MEXICAN BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: MexicanBurger,
      alt: "Close-Up Photograph of a Sandwich",
      title: "Close-Up Photograph of a Sandwich - Photo by Mehrdad Badr",
    },
    {
      foodName: "AUSTRALIAN BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: AustralianBurger,
      alt: "Two Burgers With Fries and Sauce",
      title: "Two Burgers With Fries and Sauce - Photo by Horizon Content",
    },
    {
      foodName: "AMERICAN BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: AmericanBurger,
      alt: "Burger on Brown Wooden Tray",
      title: "Burger on Brown Wooden Tray - Photo by Chevanon Photography",
    },
    {
      foodName: "ITALIAN BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: ItalianBurger,
      alt: "Close-up of Served Food on Table",
      title: "Close-up of Served Food on Table - Photo by Pixabay",
    },
    {
      foodName: "GERMAN BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: GermanBurger,
      alt: "Close-Up of a Burger on a Wooden Tray",
      title: "Close-Up of a Burger on a Wooden Tray - Photo by Mustata Silva",
    },
    {
      foodName: "AFRICAN BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: AfricanBurger,
      alt: "Close-up of a Burger",
      title: "Close-up of a Burger - Photo by Vilnis Husko",
    },
    {
      foodName: "JAPANESE BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: JapaneseBurger,
      alt: "Close-Up Photo of a Burger Sandwich - Photo by carlos lopez",
      title: "Close-Up Photo of a Burger Sandwich - Photo by carlos lopez",
    },
    {
      foodName: "FRENCH BURGER",
      foodDescription: "Lorem / ipsum/ dolor / sit / amet",
      price: "$20.99",
      photo: FrenchBurger,
      alt: "Close-Up Shot of Burger and French Fries",
      title:
        "Close-Up Shot of Burger and French Fries - Photo by Horizon Content",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    import("moment").then((module) => {
      alert("Selected date: " + module.default(date).format("DD/MM/YYYY"));
    });

    alert(
      `The name you entered is: ${fullName} \n 
       The email you entered is: ${email} \n 
       People quantity: ${peopleQuantity} \n
       Selected time: ${time} \n
       The phone you entered is: ${phone} \n`
    );
  };

  const onOptionChangeHandler = (event) => {
    setPeopleQuantity(event.target.value);
  };

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
    <div id="code-splitting" className="main">
      <div className="revising-hooks-container">
        <a className="revising-hooks-title notranslate">Code Splitting</a>
      </div>

      <>
        <div
          className="helper"
          onClick={() => setOpen(true)}
          style={{
            height: "1%",
            width:
              viewportSize && viewportSize?.orientation === "portrait"
                ? "90%"
                : "80%",
            top:
              viewportSize && viewportSize === "Desktop"
                ? "28vh"
                : viewportSize?.orientation === "landscape"
                ? "13vw"
                : "25vh",
            position: "relative",
          }}
        >
          <a
            style={{
              fontSize: "16px",
              color: "#000000",
              cursor: "pointer",
            }}
          >
            Why do I see this page?
          </a>
          <a className="emoji" onClick={() => setOpen(true)}>
            &nbsp;🤔
          </a>
        </div>
        <Modal openModal={open} setOpenModal={setOpen}>
          <section
            className="revising-hooks-explainers"
            style={{ margin: ".5vh 0vw 1vh 0vw" }}
          >
            <div
              className="revising-hooks-explainers-container"
              style={{
                height:
                  viewportSize !== undefined
                    ? viewportSize === "Desktop"
                      ? "100%"
                      : "88%"
                    : "88%",
              }}
            >
              <h5
                style={{
                  fontWeight: 300,
                  textAlign: "left",
                  width: "96%",
                  color: "#000000",
                  margin: 0,
                  overflowX: "hidden",
                }}
              >
                There is a technique to speed up applications called code
                splitting, which involves sending only necessary pieces of code
                to the user when needed. By default, when a React app is
                created, all code is downloaded at once when the user accesses
                it. As the app grows, its size increases, resulting in longer
                load times, especially on slow internet connections. To improve
                performance, large modules can be split into smaller chunks of
                JavaScript files that can be loaded separately from the package.
                This way, the user can download and load the package first and
                then the smaller chunks as needed, resulting in a faster
                experience. For example, the moment module can be imported like
                this:
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
                    moment
                    <strong className="import-text"> from </strong>'
                    <strong className="code-text">moment</strong>
                    ';
                    <br />
                    <strong className="function-text">function </strong>
                    <strong className="const-text">onClick</strong>
                    {"() {"}
                    <br />
                    <strong className="const-text">setDate</strong>
                    {"("}
                    <strong className="function-text">moment</strong>
                    {"("}
                    <strong className="import-text">new </strong>
                    <strong className="const-text">Date</strong>
                    {"())."}
                    <strong className="function-text">format</strong>
                    {"('"}
                    <strong className="code-text">MM/D/YYYY</strong>
                    {"'))"}
                    <br />
                    {"}"}
                  </code>
                </div>
                <br />
                For instance, instead of importing the moment module in our
                application, we can use import() syntax to load it as a separate
                chunk when the user interacts with a resource that requires
                moment.
                <br />
                As in this example:
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
                    <strong className="function-text">async function </strong>
                    <strong className="const-text">onClick</strong>
                    {"() {"}
                    <br />
                    <strong className="import-text">import</strong>
                    {'("'}
                    <strong className="code-text">moment</strong>
                    {'").'}
                    <strong className="function-text">then</strong>
                    {"(("}
                    <strong className="const-text">module</strong>
                    {") => {"}
                    <br />
                    <strong className="component-text">alert</strong>
                    {"("}
                    <strong className="const-text">module</strong>
                    {"."}
                    <strong className="function-text">default</strong>
                    {"("}
                    <strong className="import-text">new </strong>
                    <strong className="const-text">Date</strong>
                    {"())."}
                    <strong className="function-text">format</strong>
                    {"('"}
                    <strong className="code-text">MM/D/YYYY h:mmA</strong>
                    {'"));'}
                    <br />

                    {"});"}
                    <br />

                    {"}"}
                  </code>
                </div>
                <br />
                The import() syntax is a JavaScript Promise-based technique that
                allows us to load modules as separate chunks. We can mark the
                function as asynchronous and wait for the Promise to resolve. We
                also need to select the default export using .default. Now, upon
                checking the Network tab, we can observe that the moment module
                has its own separate piece, which is downloaded independently
                from the rest of the package. We can also apply code splitting
                to components using a tool called React.lazy(), which allows us
                to make a component's code available only when it is requested.
                For example, in a simple three-page application, we can use
                React.lazy() to divide code within our Router and only load the
                necessary components when requested, improving the application's
                performance. In this case, we can use React.lazy() to divide the
                code within our Router and load the necessary component only
                when requested, enhancing the application's performance. By
                doing so, we can split large modules and components into smaller
                chunks that are loaded only when needed, improving the
                performance of our application. With this knowledge, we can
                apply code splitting to our Router, as demonstrated in the
                example below:
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
                    <strong className="comment-text">...</strong>
                    <br />
                    <br />
                    <strong className="comment-text">
                      //import CodeSplitting from
                      "../pages/CodeSplitting/CodeSplitting"; // regular import
                    </strong>
                    <br />
                    <strong className="import-text">const </strong>
                    <strong className="const-text">CodeSplitting</strong>
                    {" = "}
                    <strong className="function-text">lazy</strong>
                    {"(()=> "}
                    <strong className="import-text">import</strong>
                    {'("'}
                    <strong className="code-text" style={{ display: "block" }}>
                      ../pages/CodeSplitting/CodeSplitting
                    </strong>
                    {'")); '}
                    <strong className="comment-text">// dynamic import</strong>
                    <br />
                    <br />
                    <strong className="import-text">const </strong>
                    {""}
                    <strong className="const-text">Router</strong>
                    {" = () => ("}
                    <br />
                    {"<"}
                    <strong className="component-text">BrowserRouter</strong>
                    {">"}
                    <br />
                    {"<"}
                    <strong className="component-text">Routes</strong>
                    {">"}
                    <br />
                    {"<"}
                    <strong className="component-text">Route </strong>
                    <strong className="function-text">path</strong>
                    {'="'}
                    <strong className="code-text">/</strong>
                    {'" '}
                    <strong className="function-text">element</strong>
                    {"={<"}
                    <strong className="component-text">Home </strong>
                    {"/>} />"}
                    <br />
                    {"<"}
                    <strong className="component-text">Route </strong>
                    <strong className="function-text">path</strong>
                    {'="'}
                    <strong className="code-text">/topics</strong>
                    {'" '}
                    <strong className="function-text">element</strong>
                    {"={<"}
                    <strong className="component-text">Topics</strong>
                    {"/>} />"}
                    <br />
                    {"<"}
                    <strong className="component-text">Route </strong>
                    <strong className="function-text">path</strong>
                    {'="'}
                    <strong className="code-text">
                      /topics/code-splitting
                    </strong>
                    {'"'}
                    <br />
                    <strong className="function-text">element</strong>
                    {"={"}
                    <br />
                    {"<"}
                    <strong className="component-text">Suspense </strong>
                    <strong className="function-text">fallback</strong>
                    {"={<"}
                    <strong className="component-text">p</strong>
                    {">Loading...</"}
                    <strong className="component-text">p</strong>
                    {">}>"}
                    <br />
                    {"<"}
                    <strong className="component-text">
                      CodeSplittingModules{" "}
                    </strong>
                    {"/>"}
                    <br />
                    {"</"}
                    <strong className="component-text">Suspense</strong>
                    {">"}
                    <br />
                    {"}"}
                    <br />
                    {"/>"}
                    <br />
                    <br />
                    <strong className="comment-text">...</strong>
                  </code>
                </div>
                <br />
                The {"<Suspense>"} component instructs React to show a loading
                state while dynamically loaded components imported with
                React.lazy() are being downloaded. In this case, a paragraph
                that says "Loading..." is shown. Once the lazily loaded
                component is ready, it will be inserted into the application. To
                use React.lazy() for dynamic imports, we should wrap the lazy
                component in the {"<Suspense>"} component, so that it only
                renders after the rest of the app has rendered. After doing
                this, when we run the application, it looks exactly the same,
                with one exception: the CodeSplitting component is no longer
                loaded when the application is accessed, but only when we
                navigate to the Code Splitting screen that uses this component.
                <br />
                <br />
                Link of the code used on this page in GitHub:&nbsp;
                <a href={linkOfCode} style={{ textDecoration: "underline" }}>
                  Code Splitting
                </a>
              </h5>
            </div>
          </section>
        </Modal>
      </>

      <div className="code-splitting-modules-container">
        <div className="code-splitting-modules-content-container">
          <div id="welcome" className="welcome-container">
            <MoreIconHorizontally
              windowSize={viewportSize}
            ></MoreIconHorizontally>
          </div>

          <div className="store-container">
            <div className="first-container-store">
              <div className="container-store-text">
                <div
                  className="welcome-container-text"
                  style={{ minHeight: "10vh" }}
                >
                  <a className="welcome-text">Discover</a>
                  <a
                    className="nav-text"
                    style={{
                      fontSize: "clamp(1.1em,1.46vw, 1.35em)",
                      color: "black",
                      fontWeight: "400",
                      marginTop: "2%",
                    }}
                  >
                    OUR STORE
                  </a>
                </div>

                <img
                  alt="stars"
                  title="Stars"
                  src={Stars}
                  style={{ margin: 0 }}
                  loading="lazy"
                ></img>

                <p className="store-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus pretium laoreet elit eu volutpat. Donec ut massa
                  eget eros fermentum fringilla.
                </p>
                <a href="#welcome" className="about-us">
                  ABOUT US
                </a>
              </div>

              <div className="image-store-container">
                <img
                  alt="Trendy interior of cafe with creative lamps and wooden furniture"
                  title="Trendy interior of cafe with creative lamps and wooden furniture - Photo by Volkan Vardar"
                  id="lazy"
                  src={Store1}
                  loading="lazy"
                  className="store-image"
                />
              </div>
            </div>
          </div>

          <div
            title="Close-Up Photography Of Hamburger - Photo by Tioroshi Lazaro"
            id="menu"
            className="menu-image-container"
          >
            <div
              className="welcome-container-text"
              style={{ minHeight: "40vh" }}
            >
              <a className="welcome-text">Explore</a>
              <a
                className="nav-text"
                style={{
                  fontSize: "clamp(1.1em,1.46vw, 1.35em)",
                  fontWeight: "400",
                  marginTop: "1%",
                }}
              >
                OUR MENU
              </a>
            </div>
          </div>

          <div className="menu-container">
            <div className="menu-container-wrapper">
              {MenuList.map((item, index) => {
                return (
                  <div key={index} className="menu-item">
                    <img
                      alt={item.alt}
                      title={item.title}
                      src={item.photo}
                      className="menu-item-img"
                      style={{ margin: 0 }}
                    />
                    <div className="food-information">
                      <a
                        className="nav-text notranslate"
                        style={{
                          fontSize: "clamp(1.1em,1.46vw, 1.35em)",
                          fontWeight: "400",
                          marginTop: "1%",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        {item.foodName}
                      </a>

                      <a
                        className="nav-text"
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          marginTop: "1%",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        {item.foodDescription}
                      </a>

                      <a
                        className="nav-text"
                        style={{
                          fontSize: "clamp(1.1em,1.46vw, 1.35em)",
                          fontWeight: "bold",
                          marginTop: "1%",
                          color: "#ED7A11",
                          textAlign: "right",
                        }}
                      >
                        {item.price}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            title="Delicious hamburger with cocktails on table - Photo by Rachel Claire"
            id="booking"
            className="booking-image-container"
          >
            <div
              className="welcome-container-text"
              style={{ minHeight: "40vh" }}
            >
              <a className="welcome-text">Booking</a>
              <a
                className="nav-text"
                style={{
                  fontSize: "clamp(1.1em,1.46vw, 1.35em)",
                  fontWeight: "400",
                }}
              >
                RESERVE A TABLE
              </a>
            </div>
          </div>

          <div className="booking-container">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-container-wrapper">
                <div className="input-container">
                  <label>How Many People</label>
                  <select
                    required
                    className="select-how-many-people"
                    onChange={onOptionChangeHandler}
                  >
                    {options.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                </div>

                <div className="input-container">
                  <label>Date</label>
                  <input
                    required
                    type="date"
                    className="fraga-input"
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                    style={{
                      colorScheme: "#000000",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      background: `url(${Calendar})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1vw center",
                      backgroundSize: "16px",
                      backgroundColor: "#D9D9D9",
                      fontSize: "16px",
                    }}
                  ></input>
                </div>

                <div className="input-container">
                  <label>Time</label>
                  <input
                    required
                    type="time"
                    className="fraga-input"
                    value={time}
                    onChange={(event) => {
                      setTime(event.target.value);
                    }}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      background: `url(${Clock})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1vw center",
                      backgroundSize: "16px",
                      backgroundColor: "#D9D9D9",
                      colorScheme: "black",
                      fontSize: "16px",
                    }}
                  ></input>
                </div>

                <div className="input-container">
                  <label>Name</label>
                  <input
                    required
                    type="text"
                    className="fraga-input"
                    placeholder="Your full name"
                    pattern="[A-Z\sa-z]{3,20}"
                    onBlur={() => setFullName(elem.current.value)}
                    ref={elem}
                    style={{
                      backgroundImage: `url(${Person})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1vw center",
                      backgroundColor: "#D9D9D9",
                    }}
                  ></input>
                </div>

                <div className="input-container">
                  <label>Email</label>
                  <input
                    required
                    type="text"
                    className="fraga-input"
                    placeholder="Your email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    inputMode="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    style={{
                      background: `url(${Mail})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1vw center",
                      backgroundColor: "#D9D9D9",
                    }}
                  ></input>
                </div>

                <div className="input-container">
                  <label>Phone</label>
                  <input
                    required
                    placeholder="Your phone"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    type="text"
                    className="fraga-input"
                    inputMode="tel"
                    style={{
                      background: `url(${Phone})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1vw center",
                      backgroundColor: "#D9D9D9",
                    }}
                  ></input>
                </div>
              </div>
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </form>
          </div>

          <div className="info-container">
            <div className="info-container-text">
              <div className="locations">
                <a className="info-title">LOCATIONS</a>

                <div className="locations-content">
                  <a className="info-text">
                    Lorem ipsum 21dolor, sit amet 777 Lorem Ipsum LI 20226{" "}
                  </a>

                  <a className="info-text">
                    Lorem ipsum 21dolor, sit amet 777 Lorem Ipsum LI 20226{" "}
                  </a>
                </div>
              </div>
              <div className="open-hours">
                <a className="info-title">OPEN HOURS</a>

                <div className="locations-content">
                  <a className="info-text">
                    Lorem ipsum 21dolor, sit amet 777 Lorem Ipsum LI 20226{" "}
                  </a>

                  <a className="info-text">
                    Lorem ipsum 21dolor, sit amet 777 Lorem Ipsum LI 20226{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="rights-social-media-container">
              <div className="rights-container">
                <a
                  style={{
                    fontFamily: `"Kanit", sans-serif`,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  © 2022 Lorem ipsum dolor sit amet
                </a>
              </div>

              <div className="social-media-container">
                <img
                  alt="Symbol Social Media - Twitter"
                  title="Social Media"
                  src={Twitter}
                  style={{ margin: "1vw", cursor: "pointer" }}
                ></img>
                <img
                  alt="Symbol Social Media - Facebook"
                  title="Social Media"
                  src={Facebook}
                  style={{ margin: "1vw", cursor: "pointer" }}
                ></img>
                <img
                  alt="Symbol Social Media - Instagram"
                  title="Social Media"
                  src={Instagram}
                  style={{ margin: "1vw 0 1vw 1vw", cursor: "pointer" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingButton></FloatingButton>
    </div>
  );
};

export default CodeSplittingModules;
