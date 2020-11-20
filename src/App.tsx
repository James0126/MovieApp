import "./style.css";
import React from "react";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchInput from "./listComponent/SearchInput";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <section>
    <header className="header card-header">
      <a href="/" className="headerTitle">
        Movie
      </a>
    </header>
    <Router>
      <SearchInput />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/searchPage" component={SearchPage} />
        <Route path="/info/:id" component={MovieDetailPage} />
      </Switch>
    </Router>
    <footer></footer>
  </section>
);
export default App;
