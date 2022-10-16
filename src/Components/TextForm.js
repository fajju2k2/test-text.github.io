import React, { useState } from "react";

export default function Textform(props) {

 

    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log(
            "You text has been change to UpperCase and Your text is " + text
        );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("your text has been change to upperCase" , "success")
    };

    const clearText = () => {
        console.log("You text has been cleared " + text);
        let newText = "";
        setText(newText);
        props.showAlert("your text has been change to Cleared" , "success")
    };

    const handleLowClick = () => {
        console.log(
            "You text has been change to LowerCase and Your text is " + text
        );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("your text has been change to  LowerCase" , "success")
    };

    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);

    };

    const handleCopy = () => {
        console.log(" i am copy function");
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("your text has been copied", "success" )
    };

    const handleRemoveExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("your text has removed extra Spaces" , "success")
    };

    return (
        <>
            <div className="container my-4" style={{color: props.mode==='dark'?'White':'black'}} >
                <h1>Type your Text</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}onChange={handleOnChange} style={{backgroundColor: props.mode1==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-3" style={{color: props.mode1==='dark'?'White':'black'}}  onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-success mx-3" style={{color: props.mode1==='dark'?'White':'black'}}  onClick={handleLowClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-success mx-3"  style={{color: props.mode1==='dark'?'White':'black'}} onClick={clearText}>
                    Clear Text
                </button>
                <button className="btn btn-success mx-3" style={{color: props.mode1==='dark'?'White':'black'}} onClick={handleCopy}>
                    Copy Text
                </button>
                <button
                    className="btn btn-success mx-3" style={{color: props.mode1==='dark'?'White':'black'}}
                    onClick={handleRemoveExtraSpaces}
                >
                    Extra Spaces
                </button>
            </div>
            <div className="container"style={{color: props.mode==='dark'?'White':'black'}}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(" ").length} Words And {text.length} Characters
                </p>

                <h1>Preview</h1>

                <p>{text.length>0?text:"Please Enter your Text in to the box to preview your text"}</p>

                <p>{0.008 * text.split(" ").length} Takes minutes to read it</p>
            </div>

      
        </>
    );
}
