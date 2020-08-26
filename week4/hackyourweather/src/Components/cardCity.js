import React from "react";
import { Link } from "react-router-dom";

const SingleCity = ({
  removeCountry,
  data: { id, name, main, description, country, max_temp, min_temp, lat, lon },
}) => {
  console.log(max_temp, min_temp, main, lat, lon, name, id);
  return (
    <div className="Card" index={id}>
      <h2>
        <Link to={`/${id}`}>
          {name}, {country}
        </Link>
      </h2>
      <div className="card-weather">
        <h3>{main}</h3>
        <p>{description}</p>
      </div>
      <p>max temp: {max_temp}</p>
      <p>min temp: {min_temp}</p>
      <p>
        Location: {lat}, {lon}
      </p>
      <button className="removeCountry" onClick={() => removeCountry(id)}>
        X
      </button>
    </div>
  );
};

export default SingleCity;
