import React, { useState } from 'react'
import faqdown from '../../assets/images/FaqDown.png'
import faqup from '../../assets/images/faquparrow.svg'
import './AlpFaq.css'
const AlpFaq = () => {
    const [selected,setSelected]=useState(false)
    const toggle=(index)=>{
       if(selected===index){
        return setSelected(false)
       }
       setSelected(index)
    }
    const faqdata=[
        {
            title:"Lorem ipsum dolor sit amet?",
            answer:"Bloom Serum is made with 100% organic ingredients, free from parabens, sulfates, and artificial fragrances. It deeply nourishes your scalp while promoting hair growth and reducing frizz."
        },
        {
            title:"Lorem ipsum dolor sit amet?",
            answer:"Bloom Serum is made with 100% organic ingredients, free from parabens, sulfates, and artificial fragrances. It deeply nourishes your scalp while promoting hair growth and reducing frizz."
        },
        {
            title:"Lorem ipsum dolor sit amet?",
            answer:"Bloom Serum is made with 100% organic ingredients, free from parabens, sulfates, and artificial fragrances. It deeply nourishes your scalp while promoting hair growth and reducing frizz."
        },
        {
            title:"Lorem ipsum dolor sit amet?",
            answer:"Bloom Serum is made with 100% organic ingredients, free from parabens, sulfates, and artificial fragrances. It deeply nourishes your scalp while promoting hair growth and reducing frizz."
        },
        {
            title:"Lorem ipsum dolor sit amet?",
            answer:"Bloom Serum is made with 100% organic ingredients, free from parabens, sulfates, and artificial fragrances. It deeply nourishes your scalp while promoting hair growth and reducing frizz."
        },
        {
            title:"Lorem ipsum dolor sit amet?",
            answer:"Bloom Serum is made with 100% organic ingredients, free from parabens, sulfates, and artificial fragrances. It deeply nourishes your scalp while promoting hair growth and reducing frizz."
        }
    ]
  return (
    <div className='alp-faq'>
        <h3>Frequently
        Asked Questions</h3>
      <div className="alp-faqcontainer">
         {faqdata.map((item,index)=>(
            <div className='alp-faq-items' key={index} onClick={()=>toggle(index)}>
                <div className="alp-faq-items-question">{item.title}<span>{selected === index ? <img src={faqup} alt="toggle icon" /> : <img src={faqdown} alt="toggle icon" /> }</span></div>
             
                    <div className={ selected===index ? "alp-faq-items-question-answer show":"alp-faq-items-question-answer" }>
                                {item.answer}
                            </div>
                      
            </div>
         ))}
      </div>
    </div>
  )
}

export default AlpFaq
