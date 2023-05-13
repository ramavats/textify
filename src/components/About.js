

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white'
    }
    

return (
<div className='container px-3 py-5 rounded' style={myStyle}>
    <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Textify
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Textify</strong> is a powerful online text analysis tool that allows you to analyze and manipulate text in various ways. With features like word count, character count, sentiment analysis, spell check, and more, Textify is the perfect tool for writers, students, and anyone else who works with text. Try Textify today and make your text work for you!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Features
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <ul>
                    <li><strong>Sentiment Analysis: </strong>Analyze the sentiment of the text in the text area and display whether it is positive, negative, or neutral.</li>
                    <li><strong>Spell Check: </strong>Implement a spell checker that highlights any misspelled words in the text area.</li>
                    <li><strong>Text Formatting: </strong>Allow users to format their text using various options such as bold, italic, and underline.</li> 
                    <li><strong>URL Extraction: </strong>Extract all the URLs from the text area and display them.</li>
                    <li><strong>Word Count: </strong>Count the number of words in the text area.</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Technologies Used
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <ul>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}
