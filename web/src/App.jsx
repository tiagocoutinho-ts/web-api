import { useState } from 'react'
import './App.css'
import axios from 'axios'

const ApiLocal = process.env.GET_API_AXIOS

function App() {

  const [data, setData] = useState(null);

  const backend = async function(){
    const result = await axios.get(ApiLocal)
    console.log(result.data)
    setData(result.data)
  }

  return (
    <>
      <button 
      onClick={backend} 
      >CHAMAR BACK-END</button>
      {data && (
        <div>
        <p>Nome: {data.nome}</p>
        <p>Idade: {data.idade}</p>
      </div>)}
    </>
    
  );
}

export default App
