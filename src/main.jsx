import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './components/style/generalStyle'
import Router from './router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <Router />
    </React.StrictMode>
)
