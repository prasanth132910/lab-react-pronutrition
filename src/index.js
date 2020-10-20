// eslint-disable-next-line
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import NavBar from "./components/NavBar"

ReactDOM.render(
    <React.Fragment>
        <NavBar />
        <App />
    </React.Fragment>,

    document.querySelector("#root"))