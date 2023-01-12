import { useHistory } from "react-router-dom";
import "./style.scss";

const WorkComponent = () => {
  const arr = [1, 2, 3, 4, 5];
  const history = useHistory();
  return (
    <div className="workSection">
      <div className="workHead">How does it work ?</div>
      <div className="workContainer">
        {arr.map((val: any, index: number) => {
          return (
            <div key={index} className="workContent">
              <div className="img">
                <img src="/assets/friend.svg" alt="" />
              </div>
              <div className="workText">
                Invite your Friends
                <div className="workPara">Share the link tutedude.com with your friends</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="enrolled" onClick={() => history.push("/friends-referred")}>
        Friends Who Enrolled
      </div>
    </div>
  );
};

export default WorkComponent;
