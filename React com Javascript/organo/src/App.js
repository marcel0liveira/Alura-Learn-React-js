import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradoresCadastrados = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
