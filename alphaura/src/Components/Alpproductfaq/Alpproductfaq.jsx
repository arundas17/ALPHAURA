import React, { useState } from "react";
import faqdown from "../../assets/images/productfaqmulti.png";
import faqup from "../../assets/images/productfaqcross.png";
import "./Alpproductfaq.css";
const Alpproductfaq = () => {
  const [selected, setSelected] = useState(false);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(false);
    }
    setSelected(index);
  };
  const faqdata = [
    {
      title: "Product Details",
      answer:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Risk Free Guarantee",
      answer:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Shipping & Deliveries",
      answer:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
    {
      title: "Returns",
      answer:
        "The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:",
    },
  ];
  return (
    <div className="product-faq">
      <div className="alp-faq">
        <div className="alp-faqcontainer">
          {faqdata.map((item, index) => (
            <div
              className="alp-faq-items"
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="alp-faq-items-question">
                {item.title}
                <span>
                  {selected === index ? (
                    <img src={faqup} alt="toggle icon" />
                  ) : (
                    <img src={faqdown} alt="toggle icon" />
                  )}
                </span>
              </div>

              <div
                className={
                  selected === index
                    ? "alp-faq-items-question-answer show"
                    : "alp-faq-items-question-answer"
                }
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Alpproductfaq;
