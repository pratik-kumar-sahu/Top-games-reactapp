import React from "react";
import "./styles.css";
import { useState } from "react";

const gameDB = {
  Racing: [
    { name: "Forza Horizon 4", rating: "5/5" },
    { name: "NFS Payback", rating: "4.5/5" },
    { name: "Asphalt", rating: "3.5/5" },
    { name: "Buggy Racing", rating: "3/5" },
  ],
  Fighting: [
    {
      name: "Mortal Kombat",
      rating: "5/5",
    },
    {
      name: "Avengers",
      rating: "4.5/5",
    },
    {
      name: "Dragon Ball Z",
      rating: "4/5",
    },
  ],
  Survival: [
    {
      name: "Last of Us",
      rating: "4.5/5",
    },
    {
      name: "Fortnite",
      rating: "4/5",
    },
    {
      name: "PUBG",
      rating: "4/5",
    },
  ],
  Shooting: [
    {
      name: "Call of Duty",
      rating: "4.5/5",
    },
    {
      name: "Tom Clancy's Splinter cell",
      rating: "4/5",
    },
    {
      name: "Battlefield",
      rating: "4.5/5",
    },
  ],
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Racing");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1> 🎮 TopGames </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my collection of favourite games. Select a category to get
        started with.
      </p>

      <div>
        {Object.keys(gameDB).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gameDB[selectedCategory].map((game) => (
            <li
              key={game.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              <div style={{ fontSize: "larger" }}> {game.name} </div>
              <div style={{ fontSize: "smaller" }}> {game.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
