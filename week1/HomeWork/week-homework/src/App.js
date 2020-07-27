import React from "react";
import "./App.css";
import Hobbies from "./Components/Hobbies";
import Counter from "./Components/Counter";
import Guarantee from "./Components/Guarantee";
import chat from "./assets/exercises/chat.png";
import coin from "./assets/exercises/coin.png";
import delivery from "./assets/exercises/f-delivery.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hobbies />

        <div className="Guarantee">
          <Guarantee
            title="free shipping"
            description="this is number 1"
            img={chat}
          />
          <Guarantee
            title="100% money back"
            description="this is number 2"
            img={delivery}
          />
          <Guarantee
            title="online support"
            description="this is number 3"
            img={coin}
          />
        </div>

        <Counter />
      </header>
    </div>
  );
}

export default App;
