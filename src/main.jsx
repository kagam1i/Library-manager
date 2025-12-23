import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider нужен, чтобы любой компонент мог читать/писать в store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)


