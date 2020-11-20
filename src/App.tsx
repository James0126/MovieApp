import "./style.css";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchInput from "./listComponent/SearchInput";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as action from "./apiAction/action";

const App = () => {
  useEffect(() => {
    //메인 페이지에서 보여주는 영화 리스트는 한번만 저장해놓으면 되기 때문에(사용자에 의해 바뀌지않음)
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
