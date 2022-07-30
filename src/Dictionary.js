import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setSearchResult(response.data[0]);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
      <Result data={searchResult} />
    </div>
  );
}
