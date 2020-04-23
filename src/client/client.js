// Start up point for the client side application
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import 'babel-polyfill'
import { renderRoutes } from 'react-router-config'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                { renderRoutes(Routes) }
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.hydrate(
    app, 
    document.querySelector('#root'))