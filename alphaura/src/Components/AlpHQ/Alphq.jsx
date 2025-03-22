import React from "react";
import hq1 from "../../assets/images/hq1.png";
import hq2 from "../../assets/images/hq2.png";
import hq3 from "../../assets/images/hq3.png";
import hq4 from "../../assets/images/hq4.png";
import hq5 from "../../assets/images/hq5.png";
import hq6 from "../../assets/images/hq6.png";
import "./Alphq.css";
const Alphq = () => {
  const hqitems = [
    {
      hqimag: hq1,
      hqcontent: "Made in THE USA",
    },
    {
      hqimag: hq2,
      hqcontent: "No Additives",
    },
    {
      hqimag: hq3,
      hqcontent: "All Natural",
    },
    {
      hqimag: hq4,
      hqcontent: "Fully science based",
    },
    {
      hqimag: hq5,
      hqcontent: "All Natural",
    },
    {
      hqimag: hq6,
      hqcontent: "3rd PARTY TESTED",
    },
  ];
  return (
    <div className="highest-quality">
      <div className="cartandhqcontainer">
        <h3 className="highest-quality-head">the highest quality</h3>
        <div className="highest-quality-wrapper">
          {hqitems.map((item, index) => (
            <div className="highest-quality-items">
              <img src={item.hqimag} alt="" />
              <span>{item.hqcontent}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alphq;
