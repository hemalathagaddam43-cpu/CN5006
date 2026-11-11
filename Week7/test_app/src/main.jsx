import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'
import DiscountCalculator from './DiscountCalculator.jsx'
import Welcome from './MyApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome name="Thanusri" age={19} />
    <Welcome name="Tanvi" age={19} />
    <Product productName="Laptop" price={800} />
    <DiscountCalculator productName="Wireless Headphones" price={88.99} />
    
  </StrictMode>,
)
