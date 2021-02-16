import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setBooks(response.data);
  };

  return (
    <div className="App">
      <h1>List of books </h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book) => {
            return (
              <div className="book">
                <ul>{book.name}</ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
