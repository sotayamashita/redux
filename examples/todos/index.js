import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import DevTools from './containers/DevTools';

const enhancer = compose(
  DevTools.instrument()
);

let store = createStore(todoApp, enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
