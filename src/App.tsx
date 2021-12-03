import React, { useEffect } from 'react'

import { Counter } from './features/counter/Counter'
import './App.css'
import cityApi from './api/cityApi'

function App() {
  useEffect(() => {
    async function fetchCity() {
      const res = await cityApi.getAll()
      console.log(res)
    }
    fetchCity()
  }, [])

  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App
