import React , { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case" , "success");
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case" , "success");
    }

    const funClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared" , "success");
      }

      const funReverse = () =>{
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Reversed Text" , "success");
      }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

 const [text, setText] = useState("");

  return (
    <>
    <div className="continer my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style = {{ backgroundColor : props.mode === "dark" ? "#0b4f93" : "white"}} id="myText" rows="8"></textarea>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick} >Convert To UpperCase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleloClick} >Convert To LowerCase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-2" onClick={funReverse} >Reverse</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-2" onClick={funClear} >Clear</button>
      
    </div>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split("").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Please enter some text in the above box to preview"}</p>
    </div>
    
    </>
  )
}
