import React, { useState } from 'react';

export default function About(props) {
 

return (
  <div className="container" >
    <h1 style={{ color : props.mode === 'dark' ? 'white': 'black'}}>About Us</h1>
    <div className="ac" id="accordionExample">
      <div className="accordion-item" >
        <h2 className="accordion-header">
          <button className="accordion-button" 
          style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#262626': 'white' , 
             border: '1px solid white'
            }} 
             type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your Text
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" 
            style={{
              color : props.mode === 'dark' ? 'white': 'black' ,
               backgroundColor : props.mode === 'dark' ? '#808080': 'white' , 
               border: '1px solid white'
              }} 
          >
            <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count </strong> 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
           style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#262626': 'white' , 
             border: '1px solid white'
            }} 
           data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free to use
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"
          style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#808080': 'white' , 
             border: '1px solid white'
            }} >
            <strong> TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitalbe for writing text with word / character limit</strong> 
          </div>
        </div>
      </div>
      <div className="accordion-item" >
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
           style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#262626': 'white' , 
             border: '1px solid white'
            }} 
          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"
          style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#808080': 'white' , 
             border: '1px solid white'
            }} >
            <strong>This word counter software workd in any web browsers such as Chrome, Firefox, Internent Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong> 
          </div>
        </div>
      </div>
    </div>
  </div>
);
}