import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import App from "./components/app"
import reducers from "./reducers"

const app = (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)
const root = document.querySelector("#root")

render(app, root)
