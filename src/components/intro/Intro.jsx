import "./intro.scss";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/person.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hi there i'm</h2>
          <h1>mohamed bouayaben</h1>
          <h3>
            freelancer{" "}
            <span>
              {" "}
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("front end devlopper.")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />{" "}
            </span>
          </h3>
          {/* <a href="#portfolio">
            portfolio
            <ArrowCircleDownIcon className="icon" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
