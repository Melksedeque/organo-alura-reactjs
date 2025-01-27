import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import TituloSecao from "./componentes/TituloSecao";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278",
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      nome: "DevOps",
      cor: "#E06B69",
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software",
      link: "https://github.com/danielartine",
      time: times[0].nome,
    },
    {
      nome: "Guilherme Lima",
      cargo: "Desenvolvedor Python e JavaScript",
      link: "https://github.com/guilhermeonrails",
      time: times[0].nome,
    },
    {
      nome: "Juliana Amoasei",
      cargo: "Desenvolvedora de Softwares",
      link: "https://github.com/julianaamoasei",
      time: times[0].nome,
    },
    {
      nome: "Melksedeque Silva",
      cargo: "Desenvolvedor Front-End",
      link: "https://github.com/Melksedeque",
      time: times[1].nome,
    },
    {
      nome: "Rodrigo Passos",
      cargo: "Desenvolvedor Front-End",
      link: "https://github.com/rpc1910",
      time: times[1].nome,
    },
    {
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

  function deletarColaborador(colaborador) {
    console.log(colaborador);
    return;
  }

  function alterarCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
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
