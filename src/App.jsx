import { useState } from "react"

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"
import './App.css'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('') 

  return (
    <>
    <div className="centralizar">
      <h3>Digite o nome de usuário no Github</h3>
      <input className="input" type="text" 
      onBlur={(e) => setNomeUsuario(e.target.value)} 
      onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    }}  />
    </div>

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    </>
  )
}

export default App
