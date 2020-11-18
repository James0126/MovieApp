import React, { useEffect } from "react";
import App from "./App";
import { Provider } from "react-redux";
import * as Action from "./Action";

export default function StoreController() {
  useEffect(() => {
    Action.getMainPageList();
  }, []);

  const render = () => {
    return (
      <Provider store={Action.store}>
        <App />
      </Provider>
    );
  };

  Action.store.subscribe(render);
  return <section>{render()}</section>;
}
