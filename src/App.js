import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const quoteParDefaut = {
  quote:
    "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

// 4- créer un useState qui va contenir notre random quote
function App() {
  const [quote, setQuote] = useState(quoteParDefaut);

  // 3- La fonction getFact va appeler l'api Simpsons. Pensez à installer axios
  const getQuotes = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data[0])
      .then((data) => setQuote(data))
      .catch((err) => "sorry, erreur");
  };
  return (
    <div className="App">
      <div>{quote.quote}</div>
      <img src={quote.image} alt="avatar simspons" />
      <h1>{quote.character}</h1>

      {/* 2- créer un bouton qui, au clic de ce bouton, va aller appeler une fonction getQuotes */}
      <button type="button" onClick={getQuotes}>
        Get quotes
      </button>
    </div>
  );
}

export default App;
