import "./style.scss";
const ReferBox = () => {
  return (
    <div className="referSection">
      <div className="referBox">
        <div className="referNames">
          <div className="referName">
            Referral Earning<p className="referAmt">₹ 2,500</p>
          </div>
          <div className="referName">
            Total Referrals<p className="referAmt">7</p>
          </div>
          <div className="referName">
            Referral Earning<p className="referAmt">₹ 500</p>
          </div>
          <div className="withDrawBtn">Withdraw Balance</div>
        </div>
      </div>
      <div className="referCode">
        <div className="referCodeTile">
          Your Referral Code
          <div className="referCode" style={{ background: "#ffffff" }}>
            EDCH54
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferBox;
