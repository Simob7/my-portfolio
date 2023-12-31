import "./works.scss";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useEffect, useState } from "react";
// =====================
const Works = () => {
  const [currentSlide, SetCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? SetCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : SetCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick("right");
    }, 6000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="main-container">
      <h2 className="specialHeader">services</h2>
      <div className="works" id="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map((item) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="left-container">
                    <div className="image-container">
                      <img src={item.icon} alt="" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <span>projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src={item.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="controlls">
          <KeyboardDoubleArrowLeftIcon
            className="icon left"
            onClick={() => handleClick("left")}
          />
          <KeyboardDoubleArrowRightIcon
            className="icon right"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
