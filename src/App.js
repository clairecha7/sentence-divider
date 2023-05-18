import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);
  const [wordNumber, setWordNumber] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    const wordsArray = input.split(" ");
    if (wordsArray.length <= 1) {
      alert("Enter a sentence with more than one word!");
    } else {
      setText(wordsArray);
      setInput("");
      setWordNumber(1);
    }
  };

  useEffect(() => {
    if (wordNumber < text.length) {
      const time = setTimeout(() => setWordNumber(wordNumber + 1), 500);
      return () => clearTimeout(time);
    }
  }, [text, wordNumber]);

  return (
    <div className="container">
      <h1>Enter Your Text</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="text-container">
        {text.slice(0, wordNumber).map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
