import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.scss";

import SearchForm from "../../components/searchForm";
import Map from "../../components/map";

const Home = () => {
  const [apiData, setApiData] = useState({});

  const queryApi = async query => {
    // TODO: Retrieve API url from environment variables
    const usersApi = new URL(`${process.env.API_URL}/users`);
    for (let param in query) {
      usersApi.searchParams.set(param, query[param]);
    }
    const url = usersApi.toString();
    const data = await fetch(url);
    const dataJson = await data.json();
    console.log(dataJson);
    setApiData(dataJson);
  };

  return (
    <main class={style.home}>
      <SearchForm queryApi={queryApi} />
      <Map apiData={apiData} />
    </main>
  );
};

export default Home;
