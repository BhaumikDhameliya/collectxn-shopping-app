import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import ScrollToTop from './HOC/ScrollToTop'

// redux
import { Provider } from 'react-redux'
import store from './app/store'

// react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// react-phone-number-input
import 'react-phone-number-input/style.css'

// react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
