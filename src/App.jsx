import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Search from "./components/Search";
import axios from "axios";
import "./App.css";

import mockResults from "./mockSearch.json";
import mockRandom from "./mockRandom.json";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [result, setResult] = useState(null);
  const [searchPage, setSearchPage] = useState(1);

  const randomRecipe = () => {
    // const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
    // axios
    //   .get(
    //     `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`
    //   )
    //   .then((response) => {
    //     setData(response.data);
    //     console.log(response.data);
    //   })

    //   .catch((error) => console.log(error));
    console.log(mockRandom);
    setData(mockRandom);
  };

  const sendSearch = () => {
    // const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
    // axios
    //   .get(
    //     `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=10&apiKey=${API_KEY}`
    //   )
    //   .then((response) => {
    //     setResult(response.data);
    //     console.log(response.data);
    //   })

    //   .catch((error) => console.log(error));
    console.log(mockResults);
    setResult(mockResults);
    setIsSearched(true);
  };

  return (
    <div className="app-body">
      <Header search={search} setSearch={setSearch} sendSearch={sendSearch} />
      <Hero random={randomRecipe} />
      {isSearched ? (
        <Search result={result} search={search} />
      ) : (
        <Content data={data} />
      )}
      <Footer />
    </div>
  );
}

export default App;
