import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const colaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          colaboradorAdicionado(colaborador)
        }
      />
      <h2>Minha Organização:</h2>
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
      <Time nome="DevOps" />
      <Time nome="UX e Design" />
      <Time nome="Mobile" />
      <Time nome="Inovação e Gestão" />
    </div>
  );
}

export default App;
