import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Seaching for the definition of ${keyword}`);
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
