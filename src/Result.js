import React from "react";
import Meaning from "./Meaning";
export default function Result(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Result">
        <h2>{props.data.word}</h2>
        <div className="phonetic">{props.data.phonetics[0].text}</div>
        <div className="phonetic-audio">
          <a
            href={props.data.phonetics[0].audio}
            target="_blank"
            rel="noreferrer"
          >
            Listen
          </a>
        </div>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
