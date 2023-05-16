import "./Topics.css";
import Sparkles from "../../assets/images/sparkles.png";
import Reading2 from "../../assets/images/reading2.png";
import Reading3 from "../../assets/images/reading3.png";
import Chatting2 from "../../assets/images/chatting2.png";
import VideoCalling from "../../assets/images/video-calling.png";
import Laptop from "../../assets/images/laptop.png";
import Reading4 from "../../assets/images/reading4.png";
import Book2 from "../../assets/images/book2.svg";
import Book3 from "../../assets/images/book3.png";
import Back3 from "../../assets/images/back3.svg";
import Back4 from "../../assets/images/back4.svg";
import Back5 from "../../assets/images/back5.svg";
import Back7 from "../../assets/images/back7.svg";
import Back8 from "../../assets/images/back8.svg";
import Back9 from "../../assets/images/back9.svg";
import Back10 from "../../assets/images/back10.svg";
import Back11 from "../../assets/images/back11.svg";
import ViewportListener from "../../utils/checkViewport";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal/Modal";

export const TopicsList = [
  {
    title: "React Hooks",
    text: "Review how the useEffect() hook works and see a really cool color change effect",
    navigateTo: "revising-use-effect-hook",
    image: Reading2,
    alt: "people stickers",
    imageTitle: "People stickers created by Stickers - Flaticon",
    imageStyle: {
      right: "12vw",
      bottom: "20vh",
      position: "relative",
      width: "27vh",
      transform: "rotate(-20deg)",
    },
    imageStyleMobile: {
      right: "28vw",
      bottom: "16vh",
      position: "relative",
      width: "25vh",
    },
    backgroundImage: Back3,
    largerCircleStyle: { top: "-3vw", right: "-2vw", background: "#E79243" },
    largerCircleStyleMobile: {
      top: "-1vh",
      right: "-4vw",
      background: "#E79243",
    },
    smallerCircleStyle: { top: "7vh", right: "3vw", background: "#E79243" },
    smallerCircleStyleMobile: {
      top: "8vh",
      right: "8vw",
      background: "#E79243",
    },
  },
  {
    title: "Custom Hook",
    text: "See what country you are in according to your location",
    textAlign: "center",
    navigateTo: "create-my-own-custom-hook",
    image: Reading3,
    alt: "people stickers",
    imageTitle: "People stickers created by Stickers - Flaticon",
    imageStyle: {
      bottom: "29vh",
      position: "relative",
      width: "28vh",
    },
    imageStyleMobile: {
      bottom: "29vh",
      position: "relative",
      width: "30vh",
    },
    backgroundImage: Back4,
    largerCircleStyle: {
      bottom: "-1vh",
      left: "-2vw",
      background: "#6CC6DA",
    },
    largerCircleStyleMobile: {
      bottom: "-1vh",
      left: "-4vw",
      background: "#6CC6DA",
    },
    smallerCircleStyle: {
      bottom: "10vh",
      left: "4vw",
      background: "#6CC6DA",
    },
    smallerCircleStyleMobile: {
      bottom: "8vh",
      left: "10vw",
      background: "#6CC6DA",
    },
  },
  {
    title: "React Context",
    text: "React feature that allows you to pass data between the component tree avoiding the manual process",
    textAlign: "center",
    navigateTo: "react-context",
    image: Chatting2,
    alt: "people stickers",
    imageTitle: "People stickers created by Stickers - Flaticon",
    imageStyle: { right: "10vw", bottom: "18vh", position: "relative" },
    imageStyleMobile: {
      bottom: "17vh",
      position: "relative",
      width: "24vh",
      right: "22vw",
    },
    backgroundImage: Back5,
    largerCircleStyle: {
      bottom: "-6vh",
      right: "1vw",
      background: "#C786FA",
    },
    largerCircleStyleMobile: {
      bottom: "-6vh",
      right: "28vw",
      background: "#C786FA",
    },
    smallerCircleStyle: {
      bottom: "8vh",
      right: "1vw",
      background: "#C786FA",
    },
    smallerCircleStyleMobile: {
      bottom: "1vh",
      right: "20vw",
      background: "#C786FA",
    },
  },
  {
    title: "Error Boundaries",
    titleAlign: "right",
    text: "Catching runtime errors in the child component tree and, if necessary, displaying a fallback UI",
    textAlign: "center",
    navigateTo: "error-boundaries",
    image: VideoCalling,
    alt: "people stickers",
    imageTitle: "People stickers created by Stickers - Flaticon",
    imageStyle: {
      right: "13vw",
      bottom: "16vh",
      position: "relative",
      width: "28vh",
    },
    imageStyleMobile: {
      right: "25vw",
      bottom: "21vh",
      position: "relative",
      width: "28vh",
      transform: "rotate(-10deg)",
    },
    backgroundImage: Back7,
    largerCircleStyle: { top: "-4vh", right: "1vw", background: "#FA8686" },
    largerCircleStyleMobile: {
      top: "-1vh",
      right: "2vw",
      background: "#FA8686",
    },
    smallerCircleStyle: { top: "11vh", right: "2vw", background: "#FA8686" },
    smallerCircleStyleMobile: {
      top: "11vh",
      right: "5vw",
      background: "#FA8686",
    },
  },
  {
    title: "Memoizing Values",
    titleAlign: "center",
    text: "We love it when apps are fast, right? But they can grow and slow down, but we can work it out",
    textAlign: "left",
    navigateTo: "memoizing-values",
    image: Laptop,
    alt: "people stickers",
    imageTitle: "People stickers created by Stickers - Flaticon",
    imageStyle: {
      bottom: "22vh",
      position: "relative",
      width: "26vh",
    },
    imageStyleMobile: {
      bottom: "30vh",
      position: "relative",
      width: "30vh",
    },
    backgroundImage: Back8,
    largerCircleStyle: {
      bottom: "-8vh",
      right: "16vw",
      background: "#C4C4C4",
    },
    largerCircleStyleMobile: {
      bottom: "-6vh",
      left: "16vw",
      background: "#C4C4C4",
    },
    smallerCircleStyle: {
      bottom: "2vh",
      left: "3vw",
      background: "#C4C4C4",
    },
    smallerCircleStyleMobile: {
      bottom: "3vh",
      left: "6vw",
      background: "#C4C4C4",
    },
  },
  {
    title: "Memoizing Components",
    text: "Here we call heavy functions when new data is needed and improve their performance",
    textAlign: "center",
    navigateTo: "memoizing-components",
    image: Reading4,
    alt: "study stickers",
    imageTitle: "Study stickers created by Stickers - Flaticon",
    imageStyle: {
      right: "7vw",
      bottom: "23vh",
      position: "relative",
      transform: "scaleX(-1)",
    },
    imageStyleMobile: {
      right: "20vw",
      bottom: "22vh",
      position: "relative",
      transform: "scaleX(-1)",
    },
    backgroundImage: Back9,
    largerCircleStyle: { top: "-4vh", right: "-2vw", background: "#84D48C" },
    largerCircleStyleMobile: {
      top: "-4vh",
      right: "-2vw",
      background: "#84D48C",
    },
    smallerCircleStyle: { top: "10vh", right: "3vw", background: "#84D48C" },
    smallerCircleStyleMobile: {
      top: "10vh",
      right: "3vw",
      background: "#84D48C",
    },
  },
  {
    title: "Memoizing Functions",
    titleAlign: "left",
    text: "Memorize a function, preventing React from recreating it when the component is re-rendered",
    navigateTo: "memoizing-functions",
    image: Book2,
    alt: "read stickers",
    imageTitle: "Read stickers created by Stickers - Flaticon",
    imageStyle: {
      right: "-11vw",
      bottom: "18vh",
      position: "relative",
      width: "28vh",
    },
    imageStyleMobile: {
      right: "-21vw",
      bottom: "18vh",
      position: "relative",
      width: "26vh",
    },
    backgroundImage: Back10,
    largerCircleStyle: { bottom: "-6vh", left: "1vw", background: "#E79243" },
    largerCircleStyleMobile: {
      bottom: "-2vh",
      left: "-2vw",
      background: "#E79243",
    },
    smallerCircleStyle: {
      bottom: "12vh",
      left: "2vw",
      background: "#E79243",
    },
    smallerCircleStyleMobile: {
      bottom: "8vh",
      left: "4vw",
      background: "#E79243",
    },
  },
  {
    title: "Code Splitting",
    titleAlign: "",
    text: "Making applications faster, which only involves sending the necessary pieces of code when requested",
    textAlign: "center",
    textContainerStyle: {},
    textContainerStyleMobile: { right: "2vw", width: "93%" },
    color: "#6CC6DA",
    navigateTo: "code-splitting-modules",
    image: Book3,
    alt: "read stickers",
    imageTitle: "Read stickers created by Stickers - Flaticon",
    imageStyle: {
      right: "14vw",
      bottom: "11vh",
      position: "relative",
      transform: "rotate(70deg)",
    },
    imageStyleMobile: {
      right: "23vw",
      bottom: "17vh",
      position: "relative",
      transform: "rotate(45deg)",
    },
    backgroundImage: Back11,
    largerCircleStyle: {
      bottom: "-7vh",
      right: "-3vw",
      background: "#6CC6DA",
    },
    largerCircleStyleMobile: {
      bottom: "-7vh",
      right: "-3vw",
      background: "#6CC6DA",
    },
    smallerCircleStyle: {
      bottom: "6vh",
      right: "1vw",
      background: "#6CC6DA",
    },
    smallerCircleStyleMobile: {
      bottom: "6vh",
      right: "1vw",
      background: "#6CC6DA",
    },
  },
];

export const Topics = () => {
  const [open, setOpen] = useState(false);
  const viewportSize = ViewportListener();
  let navigate = useNavigate();

  const animateButton = (e) => {
    e.target.classList.add("animate");
    setTimeout(() => {
      e.target.classList.remove("animate");
      navigate("/");
    }, 600);
  };

  function Mount() {
    window.scrollTo(0, 0);
  }

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.scrollTo(0, 0);
    }
  };

  function Navigate(to) {
    setTimeout(() => {
      navigate(to);
    }, 600);
  }

  useEffect(() => {
    Mount();
  }, []);

  return (
    <div className="main">
      <div className="topics-container">
        <a className="topics-title notranslate">Topics</a>

        <div className="home-button-container">
          <button
            className="bubbly-button notranslate"
            onClick={(e) => animateButton(e)}
          >
            {viewportSize && viewportSize === "Desktop" ? "Home" : ""}
          </button>
        </div>
      </div>

      <div className="topics">
        <div className="topics-list">
          {TopicsList.map((card, index) => {
            return (
              <div
                key={index}
                className="topics-card"
                onClick={() => Navigate(card.navigateTo)}
              >
                <img
                  alt={card.alt}
                  title={card.imageTitle}
                  src={card.image}
                  className="card-image"
                  style={
                    viewportSize && viewportSize === "Desktop"
                      ? card.imageStyle
                      : card.imageStyleMobile
                  }
                />

                <img
                  alt="..."
                  title="Background image"
                  className="background-image"
                  src={card.backgroundImage}
                  loading="lazy"
                />

                <div className="topics-card-title-container">
                  <a
                    className="topics-card-title notranslate"
                    style={{ textAlign: card.titleAlign }}
                  >
                    {card.title}
                  </a>
                </div>
                <div className="topics-card-text-container">
                  <a
                    className="topics-text"
                    style={{ textAlign: card.textAlign }}
                  >
                    {card.text}
                  </a>
                </div>

                <div
                  className="larger-circle"
                  style={
                    viewportSize && viewportSize === "Desktop"
                      ? card.largerCircleStyle
                      : card.largerCircleStyleMobile
                  }
                ></div>
                <div
                  className="smaller-circle"
                  style={
                    viewportSize && viewportSize === "Desktop"
                      ? card.smallerCircleStyle
                      : card.smallerCircleStyleMobile
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="the-end-container">
        <img
          alt="sparkles"
          title="Sparkles"
          src={Sparkles}
          className="sparkles-icon"
          loading="lazy"
          style={{ width: "10vw" }}
        ></img>
        <a
          className="topics-title"
          style={{
            fontWeight: "bold",
            textShadow: "-1vw 1vw rgba(5, 5, 5, .5)",
            padding: 0,
            fontSize: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          THE END
        </a>

        <img
          alt="sparkles"
          title="Sparkles"
          src={Sparkles}
          className="sparkles-icon"
          loading="lazy"
          style={{ width: "10vw" }}
        ></img>
      </div>

      <button className="go-to-top" onClick={scrollToTop}>
        Go to top
      </button>

      <button className="assignments" onClick={() => setOpen(true)}>
        Assignments
      </button>

      <Modal openModal={open} setOpenModal={setOpen}>
        <br />

        <h2 style={{ color: "#000" }}> Assignments</h2>
        {viewportSize && viewportSize === "Desktop" ? (
          <>
            <br />
            <br />
          </>
        ) : null}
        <div className="assignments-container">
          <a
            href="https://www.flaticon.com/free-stickers/people"
            title="people stickers"
            className="assignments-text"
          >
            People stickers created by Stickers - Flaticon
            <hr />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/global-network"
            title="global network icons"
            className="assignments-text"
          >
            Global network icons created by Freepik - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-stickers/study"
            title="study stickers"
            className="assignments-text"
          >
            Study stickers created by Stickers - Flaticon
            <hr />
          </a>
          <a
            href="https://www.flaticon.com/free-stickers/read"
            title="read stickers"
            className="assignments-text"
          >
            Read stickers created by Stickers - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-stickers/education"
            title="education stickers"
            className="assignments-text"
          >
            Education stickers created by Stickers - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/customer-service"
            title="customer service icons"
            className="assignments-text"
          >
            Customer service icons created by Freepik - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/intellectual-property"
            title="intellectual property icons"
            className="assignments-text"
          >
            Intellectual property icons created by Parzival’ 1997 - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/love"
            title="love icons"
            className="assignments-text"
          >
            Love icons created by Freepik - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/e-learning"
            title="e learning icons"
            className="assignments-text"
          >
            E learning icons created by Freepik - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/follow"
            title="follow icons"
            className="assignments-text"
          >
            Follow icons created by Becris - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/sparkle"
            title="sparkle icons"
            className="assignments-text"
          >
            Sparkle icons created by Muhammad_Usman - Flaticon
            <hr />
          </a>

          <a
            href="https://www.flaticon.com/free-icons/adult"
            title="adult icons"
            className="assignments-text"
          >
            Adult icons created by Vitaly Gorbachev - Flaticon
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/burger-on-brown-wooden-tray-1108117/"
            title="Burger on Brown Wooden Tray"
            className="assignments-text"
          >
            Burger on Brown Wooden Tray - Chevanon Photography
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-shot-of-burger-and-french-fries-3826282/"
            title="Close-Up Shot of Burger and French Fries"
            className="assignments-text"
          >
            Close-Up Shot of Burger and French Fries - Horizon Content
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/two-burgers-with-fries-and-sauce-3738755/"
            title="Two Burgers With Fries and Sauce"
            className="assignments-text"
          >
            Two Burgers With Fries and Sauce - Horizon Content
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/ham-and-bacon-burger-2983098/"
            title="Ham and Bacon Burger"
            className="assignments-text"
          >
            Ham and Bacon Burger - Jonathan Borba
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-photo-of-burger-1639562/"
            title="Close-Up Photo of Burger"
            className="assignments-text"
          >
            Close-Up Photo of Burger - Valeria Boltneva
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-shot-of-a-delicious-hamburger-12325099/"
            title="Close-Up Shot of a Delicious Hamburger"
            className="assignments-text"
          >
            Close-Up Shot of a Delicious Hamburger - The Good Burger
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/trendy-interior-of-cafe-with-creative-lamps-and-wooden-furniture-3887985/"
            title="Trendy interior of cafe with creative lamps and wooden furniture"
            className="assignments-text"
          >
            Trendy interior of cafe with creative lamps and wooden furniture -
            Volkan Vardar
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-photography-of-hamburger-2874989/"
            title="Close-Up Photography Of Hamburger"
            className="assignments-text"
          >
            Close-Up Photography Of Hamburger - Tioroshi Lazaro
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-photograph-of-a-sandwich-14085620/"
            title="Close-Up Photograph of a Sandwich"
            className="assignments-text"
          >
            Close-Up Photograph of a Sandwich - Mehrdad Badr
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-of-a-burger-on-a-wooden-tray-12025834/"
            title="Close-Up of a Burger on a Wooden Tray"
            className="assignments-text"
          >
            Close-Up of a Burger on a Wooden Tray - Mustata Silva
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-of-a-burger-13573666/"
            title="Close-up of a Burger"
            className="assignments-text"
          >
            Close-up of a Burger - Vilnis Husko
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-of-served-food-on-table-327158/"
            title="Close-up of Served Food on Table"
            className="assignments-text"
          >
            Close-up of Served Food on Table - Pixabay
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/close-up-photo-of-a-burger-sandwich-9814561/"
            title="Close-Up Photo of a Burger Sandwich"
            className="assignments-text"
          >
            Close-Up Photo of a Burger Sandwich - carlos lopez
            <hr />
          </a>

          <a
            href="https://www.pexels.com/photo/delicious-hamburger-with-cocktails-on-table-5490999/"
            title="Delicious hamburger with cocktails on table"
            className="assignments-text"
          >
            Delicious hamburger with cocktails on table - Rachel Claire
            <hr />
          </a>

          <br />
          <br />
        </div>
      </Modal>
    </div>
  );
};
