import React, { useState, useEffect } from "react";

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const url = "https://official-joke-api.appspot.com/random_joke";

  function fetchData() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setJoke({ setup: res.setup, punchline: res.punchline });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
}

const Joke = ({ joke }) => {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default RandomJoke;
