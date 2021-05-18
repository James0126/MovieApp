import "./style.css";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchInput from "./listComponent/SearchInput";
import * as action from "./apiAction/action";

const App = () => {
  useEffect(() => {
    //맨 처음 한번만 리스트를 불러오면 됨(사용자에 의해 바뀌지않음)
    action.getMainPageList();
  }, []);
  return (
    <Provider store={action.store}>
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
    </Provider>
  );
};
export default App;
