import "./style.scss";

const CardComponent = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const topics = [
    "UI/UX",
    "Photoshop",
    "Illustrator",
    "Python",
    "MERN",
    "Java",
    "C++",
    "Javasciprt",
    "ReactJs",
    "NodeJs",
  ];
  return (
    <div className="cardSection">
      <div className="cardSlider">
        {arr.map((val: any, index: number) => {
          return (
            <div className="card" style={{}} key={index}>
              <div className="cardHead">
                <div className="cardName">Dhiraj Saxsena</div>
                <div className="cardDate">14 Sep, 2022</div>
              </div>
              <div className="courseEnr">Courses Enrolled(6)</div>
              <div className="topics">
                {topics.map((val: string, index: number) => {
                  return (
                    <div className="topicsName" key={index}>
                      {val}
                    </div>
                  );
                })}
              </div>
              <div className="refAmount">
                Referral Amount <span className="price">₹185</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
