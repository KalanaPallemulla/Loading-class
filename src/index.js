import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

function showLoadingIcon() {
  ReactDOM.render(document.getElementById("loading"));
}

function hideLoadingIcon() {
  ReactDOM.unmountComponentAtNode(document.getElementById("loading"));
}

document.addEventListener("DOMContentLoaded", renderApp);

document.addEventListener("ajaxStart", showLoadingIcon);
document.addEventListener("ajaxStop", hideLoadingIcon);
