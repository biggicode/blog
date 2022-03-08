import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import App from "./components/app"
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(thunk))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const root = document.querySelector("#root")

render(app, root)
