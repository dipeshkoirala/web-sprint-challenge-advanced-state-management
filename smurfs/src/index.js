import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {reducer} from './reducers'

/* - [*] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware. */
import thunk from 'redux-thunk'
import {  applyMiddleware, createStore } from "redux";
import {Provider} from 'react-redux'

const logme=({getState})=>(nxt)=>(action)=>{
    console.log("Actions logged from logme", action)
    nxt(action)
}

const store=createStore(reducer,applyMiddleware(thunk,logme))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
