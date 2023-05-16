import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Back12 from "../../assets/images/back12.svg";
import StayAtHome from "../../assets/images/stay-at-home.png";
import ViewportListener from "../../utils/checkViewport";
import "./Projects.css";

export const Projects = () => {
  const viewportSize = ViewportListener();

  let navigate = useNavigate();

  function Mount() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    Mount();
  }, []);

  const animateButton = (e) => {
    e.target.classList.add("animate");
    setTimeout(() => {
      e.target.classList.remove("animate");
      navigate("/");
    }, 600);
  };

  const ProjectsList = [
    {
      tittle: "Blank Thoughts",
      titleAlign: "center",
      text: "Come enjoy a new way to connect with everyone for free with Chatlla!",
      navigateTo: "./blank-thoughts",
      image: StayAtHome,
      imageStyle: { bottom: "14vw", position: "relative" },
      imageStyleMobile: { bottom: "22vh", position: "relative", width: "22vh" },
      backgroundImage: Back12,
      largerCircleStyle: { bottom: "-4vw", left: "1vw", background: "#4D37D4" },
      largerCircleStyleMobile: {
        bottom: "-6vw",
        left: "2vw",
        background: "#4D37D4",
      },
      smallerCircleStyle: { bottom: "6vh", left: "1vw", background: "#4D37D4" },
      smallerCircleStyleMobile: {
        bottom: "6vh",
        left: "2vw",
        background: "#4D37D4",
      },
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-title-container">
        <a className="projects-title">Projects</a>

        <div className="home-button-container">
          <button className="bubbly-button" onClick={(e) => animateButton(e)}>
            {viewportSize && viewportSize === "Desktop" ? "Home" : ""}
          </button>
        </div>
      </div>

      <div className="projects">
        <div className="projects-list">
          {ProjectsList.map((card, index) => {
            return (
              <div
                className="topics-card"
                onClick={() => {
                  card.tittle === "Blank Thoughts"
                    ? (location.href =
                        "https://chatlla.learnadvancedreact.com.br/")
                    : navigate(card.navigateTo);
                }}
                key={index}
              >
                <img
                  src={card.image}
                  className="projects-card-image"
                  style={
                    viewportSize && viewportSize === "Desktop"
                      ? card.imageStyle
                      : card.imageStyleMobile
                  }
                />
                <img className="background-image" src={card.backgroundImage} />
                <div className="projects-card-title-container">
                  <a
                    className="projects-card-title notranslate"
                    style={{ textAlign: card.titleAlign }}
                  >
                    {card.tittle}
                  </a>
                </div>
                <div className="projects-card-text-container">
                  <h4
                    className="projects-text"
                    style={{ textAlign: card.textAlign }}
                  >
                    {card.tittle === "Optimize This!" ? (
                      card.text
                    ) : (
                      <label>
                        Come enjoy a new way to connect with everyone for free
                        with{" "}
                        <a href="https://chatlla.learnadvancedreact.com.br/">
                          <strong
                            style={{
                              color: "#D88DB6",
                              cursor: "pointer",
                              textDecoration: "underline",
                              fontSize: "16px",
                            }}
                          >
                            Chatlla
                          </strong>
                        </a>
                        !
                      </label>
                    )}
                  </h4>
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
    </div>
  );
};
