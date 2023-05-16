import "./Home.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Close from "../../assets/icons/close-2.svg";
import FirstBackgroundImage from "../../assets/images/back1.svg";
import SecondBackgroundImage from "../../assets/images/back2.svg";
import Chatting from "../../assets/images/chatting.png";
import NLandingPageChatllaMobile1 from "../../assets/images/NLandingPageChatlla-Mobile-1.svg";
import NLandingPageChatllaMobile2 from "../../assets/images/NLandingPageChatlla-Mobile-2.svg";
import NLandingPageChatlla from "../../assets/images/NLandingPageChatlla.svg";
import PlayWithPet from "../../assets/images/play-with-pet.png";
import ReactLogo from "../../assets/images/react-js-logo.svg";
import Sparkles from "../../assets/images/sparkles.png";
import Bell from "../../assets/icons/bell.svg";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import ViewportListener from "../../utils/checkViewport";
import useSwipe from "../../utils/useSwipeDetection";

export const Home = () => {
  const viewportSize = ViewportListener();
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [auxShowWarning, setAuxShowWarning] = useState(null);
  const [swipe, setSwipe] = useState(0);
  const [width, setWidth] = useState("100px");
  const [height, setHeight] = useState("100px");
  const [borderRadius, setborderRadius] = useState("100%");

  useSwipe(
    "touchsurface",
    () => {
      if (viewportSize?.orientation === "portrait") {

        let element = document.getElementById("landingPage");
        let element2 = document.getElementsByTagName("span")[0];
        let element3 = document.getElementsByTagName("span")[1];

        if (!element2.classList.contains("dots-active")) {
          element3.classList.remove("dots-active");
          element2.classList.add("dots-active");

          element.src = NLandingPageChatllaMobile1;
          setSwipe(0);
        }
      }
    },
    () => {
      if (viewportSize?.orientation === "portrait") {

        let element2 = document.getElementsByTagName("span")[0];
        let element3 = document.getElementsByTagName("span")[1];

        element2.classList.remove("dots-active");
        element3.classList.add("dots-active");

        let element = document.getElementById("landingPage");
        element.src = NLandingPageChatllaMobile2;

        setSwipe(1);
      }
    }
  );

  const Mount = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    Mount();
  }, []);

  useEffect(() => {
    if (auxShowWarning && showWarning && viewportSize !== "Desktop") {
      setShowWarning(false);
      setAuxShowWarning(null);
      setWidth("14vh");
      setHeight("14vh");
      setborderRadius("100%");
      setSwipe(0);
    }

    if (auxShowWarning && showWarning && viewportSize === "Desktop") {
      setShowWarning(false);
      setAuxShowWarning(null);
      let element = document.getElementsByClassName("warning")[0];

      element.style.width = "150px";
      element.style.height = "150px";
      element.style.borderRadius = "75px";
    }
  }, [showWarning, auxShowWarning]);

  return (
    <div className="home-container">
      <div className="home-title-container">
        <a className="home-title notranslate">
          Unlock{" "}
          <strong style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}>
            Advanced React
          </strong>
          <strong style={{ textShadow: "none" }}>
            <img
              alt="sparkles"
              title="Sparkles"
              src={Sparkles}
              className="sparkles"
              style={{
                display:
                  viewportSize === undefined || viewportSize === "Desktop"
                    ? "inline"
                    : "none",
              }}
            />
          </strong>
        </a>
      </div>

      <img
        alt="react logo"
        title="React Logo"
        src={ReactLogo}
        className="react-logo"
      ></img>

      <div className="home-text-navigation-container">
        <a className="home-navigation-text">
          {viewportSize !== "Desktop"
            ? "Slide to navigate"
            : "Browse the topics and projects below"}
        </a>
      </div>

      {viewportSize &&
        (viewportSize === "Desktop" ? (
          <div
            className="warning"
            style={{
              right: showWarning ? "1vw" : "2vw",
              bottom: showWarning ? ".5vw" : "2vw",
              cursor: showWarning ? "default" : "pointer",
            }}
            onClick={() => {
              let element = document.getElementsByClassName("warning")[0];

              element.style.width = "98%";
              element.style.height = "98%";
              element.style.borderRadius = "2vw";
              setShowWarning(true);
            }}
          >
            {showWarning ? (
              <div className="warning-content">
                <section>
                  <img
                    src={NLandingPageChatlla}
                    style={{
                      width: "-webkit-fill-available",
                      objectFit: "cover",
                      borderRadius: "2vw",
                    }}
                  ></img>
                  <h2 className="first-landing-page-text-title">
                    Connect with
                  </h2>
                  <h1 className="first-landing-page-text-subtitle">Chatlla</h1>
                  <p className="second-landing-page-text">
                    Experience a new way to network people for free!
                  </p>
                  {/* <a href="http://localhost:5174"> */}
                  <a href="https://chatlla.learnadvancedreact.com.br/">
                    <button id="btn-get-started">Start messaging</button>
                  </a>
                  <h5 className="third-landing-page-text">Chat & Messages</h5>
                  <p className="fourth-landing-page-text">
                    With our cutting-edge platform, you'll enjoy great
                    communication and a vibrant network of like-minded people
                    ready to engage and connect with you.
                  </p>

                  <img
                    alt="close"
                    title="Close"
                    src={Close}
                    className="img-close"
                    onClick={() => {
                      setAuxShowWarning(true);
                      let element =
                        document.getElementsByClassName("warning")[0];

                      element.style.width = "150px";
                      element.style.height = "150px";
                      element.style.borderRadius = "75px";
                    }}
                  ></img>
                </section>
              </div>
            ) : (
              <>
                <div className="msgscrol">
                  <span>Project added, check it out!</span>
                </div>
                <img
                  src={Bell}
                  className="bell"
                ></img>
              </>
            )}
          </div>
        ) : (
          <div
            className="warning"
            style={{
              right: showWarning ? "0vw" : "2vw",
              bottom: showWarning ? "0vw" : "2vw",
              width: width,
              height: height,
              borderRadius: borderRadius,
            }}
            onClick={() => {
              setWidth("100%");
              setHeight("100%");
              setborderRadius("2vw");
              setShowWarning(true);
            }}
          >
            {showWarning ? (
              <div className="warning-content">
                <section id="touchsurface">
                  <img
                    alt="close"
                    title="Close"
                    src={Close}
                    className="img-close"
                    onTouchEnd={() => {
                      setAuxShowWarning(true);
                    }}
                  ></img>

                  <img
                    id="landingPage"
                    src={NLandingPageChatllaMobile1}
                    style={{
                      width: "-webkit-fill-available",
                      objectFit: "fill",
                      borderRadius: "2vw",
                    }}
                  ></img>

                  {swipe === 0 ? (
                    <>
                      <h2 className="first-landing-page-text-title">
                        Connect with
                      </h2>
                      <h1 className="first-landing-page-text-subtitle">
                        Chatlla
                      </h1>
                      <p className="second-landing-page-text">
                        Experience a new way to network people for free!
                      </p>

                      {viewportSize.orientation === "landscape" ? (
                        <>
                          <h5 className="third-landing-page-text">
                            Chat & Messages
                          </h5>

                          <button
                            id="btn-get-started-2"
                            onTouchEnd={() => {
                              // window.location = "http://localhost:5174";
                              window.location = "https://chatlla.learnadvancedreact.com.br/";
                            }}
                          >
                            Start messaging
                          </button>
                        </>
                      ) : null}
                    </>
                  ) : swipe === 1 &&
                    viewportSize.orientation === "landscape" ? (
                    <>
                      <h2 className="first-landing-page-text-title">
                        Connect with
                      </h2>
                      <h1 className="first-landing-page-text-subtitle">
                        Chatlla
                      </h1>
                      <p className="second-landing-page-text">
                        Experience a new way to network people for free!
                      </p>

                      <>
                        <h5 className="third-landing-page-text">
                          Chat & Messages
                        </h5>

                        <button
                          id="btn-get-started-2"
                          onTouchEnd={() => {
                            // window.location = "http://localhost:5174";
                            window.location = "https://chatlla.learnadvancedreact.com.br/";
                          }}
                        >
                          Start messaging
                        </button>
                      </>
                    </>
                  ) : (
                    <>
                      <h3 className="first-landing-page-text-title-2">
                        Chat & Messages
                      </h3>
                      <p className="second-landing-page-text-2">
                        With our cutting-edge platform, you'll enjoy great
                        communication and a vibrant network of like-minded
                        people ready to engage and connect with you.
                      </p>
                      <button
                        id="btn-get-started-2"
                        onTouchEnd={() => {
                          // window.location = "http://localhost:5174";
                          window.location = "https://chatlla.learnadvancedreact.com.br/";
                        }}
                      >
                        Start messaging
                      </button>
                    </>
                  )}
                  <div className="navigation-dots">
                    <span className="dots dots-active"></span>
                    <span className="dots"></span>
                  </div>
                </section>
              </div>
            ) : (
              <>
                <div className="msgscrol">
                  <span>Project added, check it out!</span>
                </div>

                <img
                  src={Bell}
                  style={{
                    width: "70px",
                    display: "block",
                    margin: "auto auto",
                  }}
                ></img>
              </>
            )}
          </div>
        ))}
        
      <div className="home-content-container">
        <div className="home-topics-and-projects">
          <div
            className="home-topics-card"
            onClick={() =>
              setTimeout(() => {
                navigate("./topics");
              }, 1000)
            }
            onTouchMove={() => setShow(true)}
            onTouchEnd={() => setShow(false)}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <img
              alt="play with pet"
              title="People stickers created by Stickers - Flaticon"
              src={PlayWithPet}
              className="play-with-pet"
            />
            <a className={show ? "first-heart" : "heartless"}>💕</a>
            <a className={show ? "second-heart" : "heartless"}>💕</a>
            <a className={show ? "third-heart" : "heartless"}>💕</a>
            <a className={show ? "fourth-heart" : "heartless"}>💕</a>
            <a className={show ? "fifth-heart" : "heartless"}>💕</a>
            <a className={show ? "sixth-heart" : "heartless"}>💕</a>
            <img
              alt="background image"
              title="Background Image"
              className="background-image"
              src={FirstBackgroundImage}
            />
            <div className="home-topics-card-title-container">
              <a className="home-topics-card-title notranslate">Topics</a>
            </div>
            <div className="home-topics-text-container">
              <a className="thought notranslate">💭</a>
              <a className="home-topics-text">
                Improve the performance of your React apps with the following
                topics like hooks, React Context, Error Boundaries, memoization
                and other optimization techniques
              </a>
            </div>
            <div
              className="larger-circle"
              style={{ right: "-1vw", top: "42vh", backgroundColor: "#CE8888" }}
            ></div>
            <div
              className="smaller-circle"
              style={{
                right: viewportSize === "Desktop" ? "2vw" : "-1vw" ?? "auto",
                top: "34vh",
                backgroundColor: "#CE8888",
              }}
            ></div>
          </div>

          <div
            className="home-projects-card"
            onClick={() =>
              setTimeout(() => {
                navigate("./projects");
              }, 1000)
            }
            onTouchMove={() => setShow2(true)}
            onTouchEnd={() => setShow2(false)}
            onMouseEnter={() => setShow2(true)}
            onMouseLeave={() => setShow2(false)}
          >
            <img
              alt="chatting"
              title="People stickers created by Stickers - Flaticon"
              src={Chatting}
              className="chatting"
            />
            <img
              alt="background image"
              title="Background Image"
              className="background-image"
              src={SecondBackgroundImage}
            />
            <div className="home-projects-card-title-container">
              <a className="home-projects-card-title notranslate">Projects</a>
            </div>
            <div className="home-projects-text-container">
              <ToDoList
                displayCheck={show2 ? "block" : "none"}
                displayNotes={show2 ? "block" : "none"}
              ></ToDoList>
              <a className="home-projects-text">
                Real-time chat built using Cloud Firestore from Google's
                Firebase platform in its most updated SDK version (v9)
              </a>
            </div>
            <div
              className="larger-circle"
              style={{ right: "-3vw", top: "40vh", backgroundColor: "#80A876" }}
            ></div>
            <div
              className="smaller-circle"
              style={{
                right: "1.5vw",
                top: "36vh",
                backgroundColor: "#80A876",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
