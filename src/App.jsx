import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Product/>
      </Provider>
    </>
  )
}

export default App
