import React from "react";
import right from "../../assets/images/comparisonRight.png";
import wrong from "../../assets/images/comparisonWrong.png";
import "./AlpComparison.css";
const AlpComparison = () => {

  const features = [
    "Guilt-Free Enjoyment",
    "Nothing Artificial",
    "60% Less Sugar & Calories",
    "Handcrafted In USA",
    "Vegan & Organic",
  ];

  return (
    <div className="AlpComparison">
     <h4>ALPHAURA VS OTHERS</h4>
      <div className="Comparison-wrapper">
        <div className="Comparisonlist features">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              {feature}
            </div>
          ))}
        </div>
        <div className="Comparisonlist primaryCheck">
          {features.map((_, index) => (
            <div key={index} className="icon check"><div>
              <img src={right} alt="" />
            </div>
              </div>
          ))}
        </div>
        <div className="Comparisonlist wrong">
          {features.map((_, index) => (
            <div key={index} className="icon cross"><div>
                  <img src={wrong} alt="" />
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

  

export default AlpComparison;
