import React from "react";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  // const hobby = hobbies.map((hobby, index) => {
  //   return (
  //     <h2 key={index}>
  //       {index} hobby: {hobby}
  //     </h2>
  //   );
  // });
  return (
    <div>
      {hobbies.map((hobby, index) => {
        return (
          <h2 key={index}>
            {index} hobby: {hobby}
          </h2>
        );
      })}
    </div>
  );
}

// const Hobbies = () => {
//   <HobbyList />;
// };
export default HobbyList;
