import React, {useState} from 'react'

export default function TextForm(props) {
    const  [heading, setHeading] = useState('');
    // heading = "tyty";//Wrong way to change the state
    // setHeading('yhfty');//Correct way to change the state

    const buttonUpClick = ()=>{
        // console.log('uppercase click' + heading);
        let newText = heading.toUpperCase();
        setHeading(newText)
    }
    const buttonLowClick = ()=>{
        let newText = heading.toLocaleLowerCase();
        setHeading(newText)
    }
    const buttonCopyClick = ()=>{
        let newText = document.getElementById('textarea');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
    }

    const handleOnChange = (event)=>{
        setHeading(event.target.value)
    }
    return (
        <>
        <div className='container' style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="textarea" className="form-label"></label>
                <textarea className="form-control" id="textarea" rows="5" value={heading} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark' ? '#40474e' : 'white', color: props.mode=== 'dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button disabled={heading.length===0} className="btn btn-primary my-4" onClick={buttonUpClick}>Convert To Uppercase</button>
            <button disabled={heading.length===0} className="btn btn-primary mx-2 my-4" onClick={buttonLowClick}>Convert To Lowercase</button>
            <button disabled={heading.length===0} className="btn btn-primary mx-2 my-4" onClick={buttonCopyClick}>Copy To Clipboard</button>
        </div>
        <div className="container" style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
            <h2 className='my-4'>Your text summary</h2>
            <p>{heading.split(' ').filter((element)=>{ return element.length!==0}).length} words and {heading.length} character</p>
            <p>{0.008 * heading.split(" ").filter((element)=>{ return element.length!==0}).length} Minute read</p>
            <h2>Preview</h2>
            <p>{heading.length>0?heading: 'Enter something in textbox above to preview it'}</p>
        </div>
        </>
    )
}
