// Properties.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Properties.css";
import { productData } from "../Home/data"; // Import productData from data.js

function Properties() {
  const [properties, setProperties] = useState([]);
  const [handle, setHandle] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Initially, set properties to the entire productData array
    setProperties(productData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = () => {
    // Simulate fetching data from an API (in your case, productData is a static array)
    const filteredData = productData.filter((property) =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProperties(filteredData);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleClick = (propertyid) => {
    setHandle((properties) => {
      if (properties.includes(propertyid)) {
        return properties.filter((id) => id !== propertyid);
      } else {
        return [...properties, propertyid];
      }
    });
  };

  return (
    <>
      <h1>Properties</h1>
      <p><span className="text">&gt;&gt;Search&gt;&gt;Book&gt;&gt;Live</span></p>
      <div className="sort-bar">
        <div className="sort">
          <input
            id="sort"
            type="text"
            placeholder="Search by location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn outline" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="main">
        {properties.map((property) => (
          <div className="container" key={property.id}>
            <div className="image">
              <img src={property.imageurl} alt={`House ${property.id}`} />
            </div>
            <div className="details">
              <h3>Location: {property.location}</h3>
              <h3>Price: {property.price}</h3>
            </div>
            <div className="button-wrapper">
              <button className="btn outline">
                <Link to={`/details/${property.id}`}>
                  See More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Properties;
