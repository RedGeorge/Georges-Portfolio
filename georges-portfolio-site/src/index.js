import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory({
   basename: "/"
});
ReactDOM.render(
  <Router history={customHistory}>
    <Routes>
      <Route
        component={({ history }) => {
          window.appHistory = history;
          return <App />;
        }}
      />
    </Routes>
  </Router>,
  rootElement
);