import React, {useState} from 'react'



export default function TextForm(props) {

    // convert to upperCase
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");

        // this is used to change the document title dynamically
        document.title = "TextUtils - Uppercase";
    
    }

    // convert to lowerCase
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
        document.title = "TextUtils - LowerCase";

    }

    // clear Text
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
        document.title = "TextUtils - clear Text";

    }

    // copy Text
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
        document.title = "TextUtils - Copy Text";

    }

    // handle Extra Spaces 
    const handleExtraSpaces = () => {

        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));    
        props.showAlert("Extra Spaces Removed", "success");
        document.title = "TextUtils - Remove Extra Space";

    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

    // Function to count words accurately
    const countWords = (text) => {
        let words = text.split(/\s+/);
        return words.filter(word => word !== "").length;
        }

  return (
    <>

    <div className="container" style={{color : props.mode === 'dark' ? 'white': 'black'}}>
     <h2>{props.heading}</h2>
    <div className="mb-3">
        {/* If I didn't use onChange event I was unable to change the text (unable to type anything in text box) */
           /* here in the style one { } is for javascript and another is for object */ }
        <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#e6e6ff': 'white'}} id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase </button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>



    <br></br>

   
    </div>

    <div className="container" style={{color : props.mode === 'dark' ? 'white': 'black'}}>
        <br></br>
        <h1> Your text Summary</h1>
        <p> {countWords(text)} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here "}</p>
    </div>

    </>
  )
}


