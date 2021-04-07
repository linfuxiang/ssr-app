import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { routers } from "./routes";
import { getClientStore } from "./store";
// import './index.css';

// import reportWebVitals from './reportWebVitals';

// const App = () => {
//   return <Simple />;
// };

const store = getClientStore();

const render = module.hot ? ReactDOM.render : ReactDOM.hydrate;
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>{routers}</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
