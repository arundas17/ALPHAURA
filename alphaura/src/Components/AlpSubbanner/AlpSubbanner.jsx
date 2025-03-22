import React from "react";
import ldropbottle from "../../assets/images/lookabndfeelbottle.png";
import "./AlpSubbanner.css";
import subimg1 from "../../assets/images/subbannerimg1.png";
import subimg2 from "../../assets/images/subbannerimg2.png";
import subimg3 from "../../assets/images/subbannerimg3.png";
import dropleaves from '../../assets/images/subbannerleavesanddrop.png'
const AlpSubbanner = () => {
    const subbannerdesc=[
        {
            descimg:subimg1,
            title:"Locked-in Moisture",
            praggraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            descimg:subimg2,
            title:"Potent Antioxidants",
            praggraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            descimg:subimg3,
            title:"REGROW LUCIOUS HAIR",
            praggraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
    ]
  return (
    <div className="subbanner">
      <div className="main-wrapper">
        <div className="subbanner-wrapper">
          <div className="subbanner-mainhead">
            <h2>LOOK & FEEL BEAUTIFUL AGAIN</h2>
            <div className="subbanner-display">
              <img src={ldropbottle} alt="" />
            </div>
            <div className="subbanner-leafesanddrop"><img src={dropleaves} alt="" /></div>
          </div>
          <div className="subbanerpoints">
            {subbannerdesc.map((item,index)=>(
                <div className="subbannerpointesitems" key={index}>
                    <div>
                        <img src={item.descimg} alt={item.descimg} className="subbannerpointesitemsimage"/>
                  
                    </div>
                    <div>
                        <div><h5>{item.title}</h5></div>
                        <div><p>{item.praggraph}</p></div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpSubbanner;
