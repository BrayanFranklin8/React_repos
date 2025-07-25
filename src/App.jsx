import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/reposList";

function App() {
  
  const [forumularioEstaVisisivel, setFormularioEstaVisivel] = useState(true)

  return(
    <>
      <Perfil nome="Brayan" endereco="https://github.com/brayanfranklin8.png"/>
      <ReposList/>
      {forumularioEstaVisisivel && (
        <Formulario/>
      )}


      <button onClick={() =>setFormularioEstaVisivel(!forumularioEstaVisisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
