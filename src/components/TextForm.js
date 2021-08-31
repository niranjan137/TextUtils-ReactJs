import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success");
    }

    const handleLowClick = () => {
        console.log("LowerCase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success");
    }

    const handleClearClick = () => {
        
        let newText = '';
        setText(newText);
        props.showAlert("clear","success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("cpoied to clipboard","success");
        
    }

    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Remove","success");
        
    }

    
   

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    // text= "new text"; //wrong way to change the the state
   //setText("new text"); //correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
           <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                

            </div>
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p><b>{text.split(" ").length} words and {text.length} character</b></p>
            <p><b>{0.008 * text.split(" ").length }Minutes read</b></p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
            
        </div>
        </>
    )
}
