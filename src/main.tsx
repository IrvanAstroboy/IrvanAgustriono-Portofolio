import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app' // Pastikan file App.tsx sudah Anda buat
import './index.css' // Pastikan pakai index.css, bukan style.css

// Kita pakai 'app' karena template Vanilla Anda menggunakan id="app" di index.html
ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)