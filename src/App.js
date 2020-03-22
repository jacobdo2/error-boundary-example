import React from "react";
import "./App.css";
import Library from "./components/Library";
import Page from "./components/Page";
import { Router, Link } from "@reach/router";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <div>
        <label>Search</label>
        <input type="text" name="search" />
      </div>
      <Link to="/library">Library</Link>
      <Link to="/search">Search results</Link>
      <Router>
        <Page path="/library" content={<Library />} />
        <Page path="/search" content={<SearchResults />} />
      </Router>
    </div>
  );
}

export default App;
