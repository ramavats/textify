import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleRemoveWhitespace = () => {
        let newString = text.replace(/\s+/g, ' ');
        setText(newString);
      };

    const handleRevText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
      };

    const handleCapitalizeWords = () => {
        let newString = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newString);
      };
      

    const handleClearClick = () => {
        let newText = ""
        setText(newText)
    }

    const handleExtractEmails = () => {
        let emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
        let emails = text.match(emailRegex);
        let newString = emails ? emails.join(', ') : 'No email addresses found';
        setText(newString);
      };

      const handleExtractPhoneNumbers = () => {
        const phoneRegex = /(\d{3}[-.\s]??\d{3}[-.\s]??\d{4}|\d{3}[-.\s]??\d{4}[-.\s]??\d{4}|\d{10})/g;
        const phoneNumbers = text.match(phoneRegex);
        const newString = phoneNumbers ? phoneNumbers.join(', ') : 'No phone numbers found';
        setText(newString);
      };
      
      const handleExtractURLs = () => {
        const urlRegex = /((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/gi;
        const urls = text.match(urlRegex);
        const newString = urls ? urls.join(', ') : 'No URLs found';
        setText(newString);
      };
      
      
      const handleCopyText = (event) => {
        const newText = document.getElementById('myBox').value;
        navigator.clipboard.writeText(newText);
        event.target.innerText = 'Copied ✅';
        setTimeout(() => {
          event.target.innerText = 'Copy';
        }, 1500);
      }
      
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
  
  return (
<>
    <div className='container' style={{color: props.mode === 'light' ? '#212A3E' : '#9BA4B5' }}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#212A3E', color: props.mode === 'light' ? '#212A3E' : '#9BA4B5' }} id='myBox' rows="8"></textarea>
    </div>
    <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary m-1" onClick={handleRevText}>Reverse Text</button>
    <button className="btn btn-primary m-1" onClick={handleRemoveWhitespace}>Remove Extra Spaces</button>
    <button className="btn btn-primary m-1" onClick={handleCapitalizeWords}>Capitalize each word</button>
    <button className="btn btn-primary m-1" onClick={handleExtractEmails}>Extract email</button>
    <button className="btn btn-primary m-1" onClick={handleExtractPhoneNumbers}>Extract Phone</button>
    <button className="btn btn-primary m-1" onClick={handleExtractURLs}>Extract URLs</button>
    <button className="btn btn-danger m-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? '#212A3E' : '#9BA4B5' }}>
        <h2>Your text summary</h2>
        <div className="alert alert-light p-2" role="alert" style={{backgroundColor: props.mode === 'light' ? 'white' : '#1f2326' , color: props.mode === 'light' ? '#212A3E' : '#DAF5FF' }}><ul>
        <li><strong>{text.trim().length === 0 ? 0 : text.split(' ').length}</strong> words and <strong>{text.length}</strong> characters</li>
        <li>{0.008 * text.split(' ').filter((element)=> {return element.length !== 0}).length} Minutes read</li></ul></div>
        
        <h2>Preview</h2>
        <div className="alert alert-primary" role="alert">{text.length > 0 ? text : 'Type something in the textbox to preview it here' }</div>
        <button className='btn btn-success' onClick={handleCopyText}>Copy</button>
    </div>

</>
  )
}
