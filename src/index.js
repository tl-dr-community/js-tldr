import React from "react";
import ReactDOM from "react-dom";
import App from "./scenes/App";
import './storage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();