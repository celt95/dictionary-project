import React from "react";
import Meaning from "./Meaning";
import "./Result.css";
export default function Result(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Result">
        <section>
          <h2>{props.data.word}</h2>
          <div className="phonetic">{props.data.phonetics[0].text}</div>
          <div className="phonetic-audio mt-3">
            <a
              href={props.data.phonetics[0].audio}
              target="_blank"
              rel="noreferrer"
            >
              Listen
            </a>
          </div>
        </section>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
