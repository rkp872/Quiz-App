import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import store from "./redux/store";

import UserType from "./components/Registration/UserType/UserType";
import RegistrationForm from "./components/Registration/RegistrationForm/RegistrationForm";
import TeacherWorkplace from "./components/Registration/TeacherWorkplace/TeacherWorkplace";
import StudentAge from "./components/Registration/StudentAge/StudentAge";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/user-type" component={UserType} />
        <Route path="/registration-form" component={RegistrationForm} />
        <Route path="/teacher-workplace" component={TeacherWorkplace} />
        <Route path="/student-age" component={StudentAge} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
