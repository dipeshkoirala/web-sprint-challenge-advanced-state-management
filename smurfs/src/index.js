import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

/* - [*] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware. */
import thunk from 'redux-thunk'
import {  applyMiddleware } from "redux";


ReactDOM.render(<App />, document.getElementById("root"));
