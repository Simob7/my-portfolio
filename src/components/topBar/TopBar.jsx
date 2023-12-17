import "./topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`top-bar ${menuOpen ? "active" : null}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            make it easy.
          </a>
          <div className="item-container">
            <PersonIcon className="icon" />
            <span>+212 632 81 77 39</span>
          </div>
          <div className="item-container">
            <MailIcon className="icon" />
            <span>bouayaben7@gmail.com</span>
          </div>
        </div>
        <div className="right" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
