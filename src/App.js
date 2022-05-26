import { useState } from "react";
import Loki from "./Images/Loki.jfif";
import Wanda from "./Images/Wanda.jfif";
import MoonKnight from "./Images/MoonKnight.jfif";
import B99 from "./Images/b99.jpg";
import TBBT from "./Images/TBBT.jfif";
import Friends from "./Images/Friends.png";
import Bridgerton from "./Images/Bridgerton.jpg";
import Euphoria from "./Images/Euphoria.jfif";
import Sherlock from "./Images/Sherlock.jpg";
import SexEd from "./Images/SexEd.jfif";
import "./styles.css";

export default function App() {
  var categoryDictonary = {
    Marvel: [
      {
        name: "WandaVision",
        image: Wanda,
        rating: 10
      },
      { name: "Loki", image: Loki, rating: 9.5 },
      { name: "Moon Knight", image: MoonKnight, rating: 8 }
    ],
    SitComs: [
      {
        name: "Brooklyn 99",
        image: B99,
        rating: 10
      },
      {
        name: "Bing Bang Theory",
        image: TBBT,
        rating: 7
      },
      {
        name: "Friends",
        image: Friends,
        rating: 7
      }
    ],
    Drama: [
      {
        name: "Euphoria",
        image: Euphoria,
        rating: 8.75
      },
      {
        name: "Sex Education",
        image: SexEd,
        rating: 10
      },
      {
        name: "Bridgerton",
        image: Bridgerton,
        rating: 8
      },
      {
        name: "Sherlock",
        image: Sherlock,
        rating: 9
      }
    ]
  };

  var categories = Object.keys(categoryDictonary);
  var [category, setCategory] = useState("Marvel");
  function ClickHandler({ item }) {
    console.log(item);
    setCategory(item);
    console.log("Categoty is" + category);
  }

  return (
    <div className="App">
      <nav>
        <h2>TV Show Reviews</h2>
        <p>Check out my ratings for some of the most popular TV Shows</p>
        <ul>
          {categories.map((item) => {
            return (
              <li
                id="Categories"
                key={item}
                onClick={() => ClickHandler({ item })}
                style={{ backgroundColor: "#d85c27" }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
      <ul id="ShowList">
        {categoryDictonary[category].map((item) => {
          return (
            <li id="Shows" key={item.name}>
              <div id="name">{item.name}</div>
              <div id="img">
                <img alt="dummy" src={item.image} />
              </div>
              <div id="rating">Rating:{item.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
