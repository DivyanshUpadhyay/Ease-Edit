import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpclick = () =>
    {
        console.log("Clicked"+text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to Uppercase","success");
    }
    const handleDelete = () =>
    {
        console.log("Clicked"+text);
        let newText= ("");
        setText(newText)
        props.showAlert("Deleted the text","success");
    }
    const handleLoclick = () =>
    {
        console.log("Clicked"+text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to Lowercase","success");
    }
    const handleSample = () =>
    {
        console.log("Clicked"+text);
        let newText= ("This is the Sample text");
        setText(newText)
        props.showAlert("Sample text generated","success");
    }
    const handleOnChange = (event) =>
    {
        console.log("ClickedChange");
        setText(event.target.value);
    }
    const handleCopy = () =>
    {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraspace = () =>
    {
        console.log("Clicked"+text);
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed","success");
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="Container" style={{color : props.mode === 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor : props.mode === 'light'?'white':'gray',color : props.mode === 'light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2"  onClick={handleUpclick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleDelete}>Delete Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSample}>Sample Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraspace}>Remove Extra Space</button>
        </div>
        <div className="Container" style={{color : props.mode === 'light'?'black':'white'}}>
            <h1>
                Text Summary 
            </h1>
            <p>{text.split(" ").length}words and {text.length} Characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter the Text to see Preview Here.'}</p>
        </div>
        </>
    )
}
