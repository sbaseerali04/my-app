 import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleUpClick = () =>{
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowerClick = () =>{
        let newText =  text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearClick = () =>{
        let newText =  '';
        setText(newText);
        props.showAlert("Clear text", "success")
    }

    const hadleOnChange = (event) =>{
        setText(event.target.value);
    }

    const wordCount = (word) => {
            // const count =  text.split(" ").length
            const count =  text.split(" ").filter(i => i).length
            return count;
    }
    

    const [text, setText] = useState('');
    return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h1 >{props.heading}</h1>
      <div className="mb-3">
         {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" onChange={hadleOnChange} style= {{background: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}  value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{wordCount(text)} words and {text.length} characters</p>
        <p>{0.008 * wordCount(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textarea above to preview it here'}</p>
    </div>
    </>

  )
}
