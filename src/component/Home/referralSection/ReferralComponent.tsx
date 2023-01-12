import React from "react";
import "./style.scss";
const ReferalComponent = () => {
  return (
    <>
      <div className="referal">
        <div className="referalCode">
          Your Referral Code <div className="codeBtn">EDCH54</div>
        </div>
        <div className="balance">
          Wallet Balance
          <div className="amount">₹ 500</div>
        </div>
      </div>
      <div className="cardTitle">
        Friends who enrolled{" "}
        <span className="cardNum" style={{ fontWeight: "300" }}>
          (3)
        </span>
      </div>
    </>
  );
};

export default ReferalComponent;
