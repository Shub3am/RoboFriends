import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState([""]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usr) => setRobots(usr))

      .catch((err) => {
        console.log("Eror Detected, Kindly Check");
      });
  }, [searchField]);
  const Searcher = (evt) => {
    setSearchField(evt.target.value.toLowerCase());
  };

  const FilteredSearch = robots.filter((r) => {
    return r.name.toLowerCase().includes(searchField);
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <>
      <h1 className="tc header"> RoboFriends </h1>
      <SearchBox Searcher={Searcher} />
      <Scroll>
        <CardList data={FilteredSearch} />
      </Scroll>
      <h1 className="Footer">Made with Love by Shubham Vishwakarma</h1>
    </>
  );
};

export default App;
