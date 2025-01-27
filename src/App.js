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
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
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
          time.corSecundaria = cor;
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
