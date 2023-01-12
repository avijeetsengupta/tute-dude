import { useWindowWide } from "../utils/util";
import "./style.scss";

const TopBar = () => {
  const width = useWindowWide(768);
  return (
    <div className={"topbar"}>
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className="navigation">
        <ul className="navlinks">
          <li className="navItems">My Assigment</li>
          <li className="navItems">Chat with Mentor</li>
          <li className="navItems">
            <div>
              <span className="profileLogo">
                <img src="/assets/profile.svg" alt="profImg" />
              </span>
              <span>ProfileName</span>
              <span className="downLogo">
                {width ? (
                  <img src="/assets/iconDown.svg" alt="down" />
                ) : (
                  <img src="/assets/whiteIconDown.svg" alt="down" />
                )}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
