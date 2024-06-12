import React, { useState } from 'react';

export default function About(props) {
 
 /* const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
*/
  const [btntext, setBtnText] = useState("Enable Dark Mode");

 /* const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  };
*/

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
            Accordion Item #1
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
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"
          style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#808080': 'white' , 
             border: '1px solid white'
            }} >
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body"
          style={{
            color : props.mode === 'dark' ? 'white': 'black' ,
             backgroundColor : props.mode === 'dark' ? '#808080': 'white' , 
             border: '1px solid white'
            }} >
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
);
}