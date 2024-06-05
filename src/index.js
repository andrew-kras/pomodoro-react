import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './App'
import './styles/main.scss'

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)