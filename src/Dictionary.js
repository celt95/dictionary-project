import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
