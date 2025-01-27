import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import TituloSecao from "./componentes/TituloSecao";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software",
      link: "https://github.com/danielartine",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "Guilherme Lima",
      cargo: "Desenvolvedor Python e JavaScript",
      link: "https://github.com/guilhermeonrails",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "Juliana Amoasei",
      cargo: "Desenvolvedora de Softwares",
      link: "https://github.com/julianaamoasei",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "Melksedeque Silva",
      cargo: "Desenvolvedor Front-End",
      link: "https://github.com/Melksedeque",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "Rodrigo Passos",
      cargo: "Desenvolvedor Front-End",
      link: "https://github.com/rpc1910",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "Amanda Domingues",
      cargo: "Cientista de Dados",
      link: "https://github.com/amandaamnd",
      time: times[2].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);
  const colaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
    return;
  }

  function alterarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomesTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          colaboradorAdicionado(colaborador)
        }
      />
      <TituloSecao nome="Minha Organização:" />
      {times.map((time, index) => (
        <Time
          key={index}
          time={time}
          alterarCor={alterarCorDoTime}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
