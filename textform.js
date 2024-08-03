import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleupclick = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };
  const handlelowclick = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  };
  const handleclearclick = () => {
    const clearText = ("");
    setText(clearText);
  };

  const handleonchange = (event) => {
    console.log('on changed');
    setText(event.target.value);
  };
  const handlespace= () => {
    let handlespace = text.split(/[ ]+/);
    setText(handlespace.join(" "));
  };
  
  const handlecopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(text.value);
  };
  

  return (
    <>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Enter Your Text to Analyze Below:</h2>
        <textarea
          className="form-control"
         
          value={text}
          onChange={handleonchange}
          id="myBox"
          rows="4"
          style={{backgroundColor: props.mode === 'dark' ? '#1d3e45' : '#F0F8FF', color: props.mode === 'light' ? '#1d3e45' : 'white'}}
          
        ></textarea>
        <button className="btn btn-info mx-2" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        
        <button className="btn btn-info mx-2" onClick={handlelowclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-info mx-2" onClick={handlespace}>
          Remove Extra space
        </button>
        <button className="btn btn-info mx-2" onClick={handlecopy}>
          Copy
        </button>
        <button className="btn btn-info mx-2" onClick={handleclearclick}>
          Clear Text
        </button>
      </div>
      
      <div className='container my-10' style={{color: props.mode === 'dark' ? '#eae2ee' : '#1d3e45'}}>
      
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters</p>
        <p>It will take {0.008 * text.split(" ").length} minutes to read for a human.</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text :'Enter something above to preview it.' }</p>
      </div>
    </>
  );
}


