import { h } from "preact";
import style from "./style.scss";

import SearchForm from "../../components/searchForm";

const Home = () => (
  <main class={style.home}>
    <SearchForm></SearchForm>
  </main>
);

export default Home;
