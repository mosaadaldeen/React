import React, { useState } from "react";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const getDogPhoto = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPhotos([data.message]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button getDog={getDogPhoto} />
      <DogPhoto dogPhotos={dogPhotos} />
    </div>
  );
}

const DogPhoto = ({ dogPhotos }) => {
  return (
    <div>
      {dogPhotos.map((dogPhoto) => {
        return <img key={Math.random()} src={dogPhoto} alt="dogPhoto" />;
      })}
    </div>
  );
};

const Button = ({ getDog }) => {
  return <button onClick={getDog}>Get a dog!</button>;
};

export default DogGallery;
