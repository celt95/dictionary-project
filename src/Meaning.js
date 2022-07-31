import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition-section">{definition.definition}</p>
            <br />
            <p>{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
