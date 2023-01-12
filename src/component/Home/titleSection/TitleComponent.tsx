import React from "react";
import "./style.scss";
import { useWindowWide } from "../../utils/util";
import { useHistory } from "react-router-dom";

const TitleComponent = () => {
  const width = useWindowWide(768);
  const history = useHistory();
  const handleRefer = () => {
    history.push("/refer-earn");
  };
  return (
    <div className="title">
      UI/UX &#62;{" "}
      <span className="referName" onClick={handleRefer}>
        Refer & Earn
      </span>{" "}
      &#62; <span className="referName">Friends Referred</span>
      {!width && (
        <div className="goBack" onClick={() => history.push("/refer-earn")}>
          <img src="/assets/arrowLeft.svg" alt="leftArrow" />
          go back
        </div>
      )}
    </div>
  );
};

export default TitleComponent;
