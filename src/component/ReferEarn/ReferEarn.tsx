import { useHistory } from "react-router-dom";
import ReferBox from "./ReferBox/ReferBox";
import "./style.scss";
import WorkComponent from "./WorkComponent/WorkComponent";

const ReferEarn = () => {
  const history = useHistory();
  const handleCart = () => {
    history.push("/friends-referred");
  };
  return (
    <div className="referEarn">
      <div className="referTitle">
        UI/UX &#62;{" "}
        <span className="referName" onClick={handleCart}>
          Refer & Earn
        </span>
      </div>
      <ReferBox />
      <WorkComponent />
    </div>
  );
};

export default ReferEarn;
