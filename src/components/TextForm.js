import React , { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Hey Hasnain");

    const textClick = () =>{
        console.log("upper case was clicked");
    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" onClick={textClick} id="myText" rows="8"></textarea>
  <button className="btn btn-primary">UpperCase</button>
</div>
    </div>
    <h1>Hey hasnain</h1>
    </>
  )
}
