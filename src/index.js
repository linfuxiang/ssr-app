import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { routers } from "./routes";
import { getClientStore } from "./store";
import App from "./App";
// import './index.css';

// import reportWebVitals from './reportWebVitals';

// const store = getClientStore();

// const render = module.hot ? ReactDOM.render : ReactDOM.hydrate;
// render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>{routers}</BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// class XSearch extends HTMLElement {
//   connectedCallback() {
//     var shadow = this.attachShadow({ mode: "closed" });

//     const mountPoint = document.createElement("div");
//     this.attachShadow({ mode: "open" }).appendChild(mountPoint);

//     ReactDOM.render(
//       <React.StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>{routers}</BrowserRouter>
//         </Provider>
//       </React.StrictMode>,
//       mountPoint
//     );
//     shadow.appendChild(mountPoint);
//   }
// }
// customElements.define("x-search", XSearch);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const shadowRoot = document
  .getElementById("root")
  .attachShadow({ mode: "open" });

const render = module.hot ? ReactDOM.render : ReactDOM.hydrate;
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  shadowRoot
);
