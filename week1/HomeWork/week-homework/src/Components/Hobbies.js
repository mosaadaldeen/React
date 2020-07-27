import React from "react";

function HobbyList({ hobby }) {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      {hobbies.map((hobby, index) => {
        return (
          <h2 key={index}>
            {index + 1}- hobby: {hobby}
          </h2>
        );
      })}
    </div>
  );
}

const Hobbies = () => {
  return (
    <div>
      <HobbyList />
    </div>
  );
};
export default Hobbies;
