import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState(null);

  const backend = async function(){
    const result = await axios.get('http://localhost:3000')
    console.log(result.data)
    setData(result.data)
  }
  return (
    <>
    {JSON.stringify(data)}
      <button 
      onClick={backend} 
      >CHAMAR BACK-END</button>
    </>
    
  )
}

export default App
