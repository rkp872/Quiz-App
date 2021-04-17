import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import UserType from "./components/Registration/UserType/UserType";
function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
      <UserType />
    </Provider>
  );
}

export default App;
