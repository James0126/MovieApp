import App from "./App";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import * as action from "./apiAction/action";

const MainRoot = () => {
  useEffect(() => {
    //메인 페이지에서 보여주는 영화 리스트는 한번만 저장해놓으면 되기 때문에(사용자에 의해 바뀌지않음)
    action.getMainPageList();
  }, []);

  return (
    <Provider store={action.store}>
      <App />
    </Provider>
  );
};
export default MainRoot;
