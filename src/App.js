// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function WordCounter() {
  const [paragraph, setParagraph] = useState('');
  const wordCount = paragraph.split(/\s+/).filter(word => word !== '').length;

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  return (
    <div className="word-counter-container">
      <h1>Responsive Paragraph Word Counter</h1>
      <div className="paragraph-box">
        <textarea
          rows="5"
          placeholder="Enter your paragraph here..."
          value={paragraph}
          onChange={handleParagraphChange}
        />
      </div>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
