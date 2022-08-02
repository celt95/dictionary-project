import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultkeyword);
  const [searchResult, setSearchResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001a3f5142bc36b4062bc42e646f8d64bc8";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function handleDictionaryResponse(response) {
    setSearchResult(response.data[0]);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultkeyword}
              onChange={handleKeyWordChange}
            />
          </form>
        </section>
        <Result data={searchResult} />
        <section>
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
