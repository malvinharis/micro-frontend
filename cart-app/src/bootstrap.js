import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../../assets/main.scss'
import { createBrowserHistory } from 'history'

const mount = (el) => {
    const history = createBrowserHistory()

    ReactDOM.render(
        <App history={history} />,
        el
    )
}

const devRoot = document.querySelector('#cart-app')
if (devRoot) {
    mount(devRoot)
}

export { mount }