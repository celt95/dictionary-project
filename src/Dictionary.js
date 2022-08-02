import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultkeyword);
  const [searchResult, setSearchResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setSearchResult(response.data[0]);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeyWordChange} />
          </form>
        </section>
        <Result data={searchResult} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
