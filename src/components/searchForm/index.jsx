import { h } from "preact";
import { useState } from "preact/hooks";

import style from "./style.scss";

const SearchForm = () => {
  const [fav_color, set_fav_color] = useState("");
  const [min_age, set_min_age] = useState("");
  const [max_age, set_max_age] = useState("");
  const [origin, set_origin] = useState("");
  const [dist, set_dist] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      fav_color,
      min_age,
      max_age,
      origin,
      dist,
    });
  };

  return (
    <form onsubmit={submitHandler}>
      <label for="dist">Favorite Color:</label>
      <input
        class={style.block}
        type="text"
        name="fav_color"
        id="fav_color"
        value={fav_color}
        onchange={(e) => set_fav_color(e.target.value)}
      />
      <label for="min_age">Minimum age:</label>
      <input
        class={style.block}
        type="text"
        name="min_age"
        id="min_age"
        value={min_age}
        onchange={(e) => set_min_age(e.target.value)}
      />
      <label for="max_age">Maximum age:</label>
      <input
        class={style.block}
        type="text"
        name="max_age"
        id="max_age"
        value={max_age}
        onchange={(e) => set_max_age(e.target.value)}
      />
      <label for="origin">Origin:</label>
      <input
        class={style.block}
        type="text"
        name="origin"
        id="origin"
        value={origin}
        onchange={(e) => set_origin(e.target.value)}
      />
      <label for="dist">Distance:</label>
      <input
        class={style.block}
        type="text"
        name="dist"
        id="dist"
        value={dist}
        onchange={(e) => set_dist(e.target.value)}
      />

      <input type="submit" value="submit" />
    </form>
  );
};

export default SearchForm;
