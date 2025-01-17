import { useState } from "react"

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('') 

  return (
    <>
    <input type="text" 
    onBlur={(e) => setNomeUsuario(e.target.value)} 
    onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.target.blur(); // Simula o evento onBlur ao pressionar Enter
    }
  }}  />

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
