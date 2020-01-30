import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Axios from "axios";

//Health Check
Axios.get("localhost:5000/ping").then(() => {
console.log("should be working")
}).catch(() => {
    console.log("not working")
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
