import React from "react";

function Output({ secretNum, term }) {
  let result;
  if (term) {
    if (term > secretNum) {
      result = "It's Higher";
    } else if (term < secretNum) {
      result = "It's Lower";
    } else if (term == secretNum) {
      result = "Wow! It's correct";
    } else {
      result = "Enter valid input";
    }
  }
  return <h3>You Guessed: {result}</h3>;
}
export default Output;
