import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("samit");

    const handleUpClick =()=>{
        // console.log("upercase was clicked" + text );
        let nextText = text.toUpperCase();
        setText(nextText);
        props.showAlert("Converted to upper case", "successful");
    }
    
    const handleLoClick =()=>{
        // console.log("upercase was clicked" + text );
        let nextText = text.toLowerCase();
        setText(nextText);
        props.showAlert("Converted to lower case", "successful");
    }
    const handleCopy = () =>{        
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Converted to copy", "successful");
    }
    const handleExtraSpace = () =>{
        let texts = text.split(/[  ]+/);
        setText(texts.join(" "));
        props.showAlert("Converted to extra space", "successful");
    }
    const handleOnChange =(event)=>{
        console.log("Handle on change");
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'#042743'}}>     
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control cursor-pointer" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase Button</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase Button</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Button</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space Button</button>
        
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
            <h1>Your text Summery</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter something to preview here"}</p>
    </div>
    </>
  )
}
