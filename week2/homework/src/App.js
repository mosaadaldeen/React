import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Friend from "./components/newFriend";
import RandomJoke from "./components/RandomJokeGenerator";
import DogPhotoGallery from "./components/DogPhotoGallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RandomJoke />
        <Friend />
        <DogPhotoGallery />
      </header>
    </div>
  );
}

export default App;
