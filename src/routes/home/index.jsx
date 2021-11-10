import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.scss";

import SearchForm from "../../components/searchForm";
import Map from "../../components/map";

const Home = () => {
  const [apiData, setApiData] = useState({});

  const queryApi = async (query) => {
    const usersApi = new URL("http://localhost:5000/users");
    for (let param in query) {
      usersApi.searchParams.set(param, query[param]);
    }
    const url = usersApi.toString();
    const data = await fetch(url);
    const dataJson = await data.json();
    setApiData(dataJson);
  };

  return (
    <main class={style.home}>
      <SearchForm queryApi={queryApi} />
      <Map />
    </main>
  );
};

export default Home;
