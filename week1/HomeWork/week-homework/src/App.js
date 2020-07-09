import React from "react";
import "./App.css";
import HobbyList from "./Components/Hobbies";
import Counter from "./Components/higherThan10";
import Guarantee from "./Components/customerService";
import chat from "./assets/exercises/chat.png";
import coin from "./assets/exercises/coin.png";
import delivery from "./assets/exercises/f-delivery.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HobbyList />

        <div className="Guarantee">
          <Guarantee
            className="section"
            title="free shipping"
            description="this is number 1"
            img={chat}
          />
          <Guarantee
            className="section"
            title="100% money back"
            description="this is number 2"
            img={delivery}
          />
          <Guarantee
            className="section"
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
