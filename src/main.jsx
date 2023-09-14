import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import '/public/css/styles.css';
import 'animate.css';
import { ConcentrationOMemoryApp } from './ConcentrationOMemoryApp.jsx'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ConcentrationOMemoryApp />
        </Provider>
    </React.StrictMode>
)
