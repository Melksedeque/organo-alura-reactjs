import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import TituloSecao from "./componentes/TituloSecao";
import { v4 as uuidv4 } from "uuid";
import ExibirEsconderFormularios from "./componentes/ExibirEsconderFormularios";

function App() {
  const urlTimes = "http://localhost:8080/times";
  const urlPessoas = "http://localhost:8080/pessoas";

  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch(urlTimes)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTimes(dados);
      });
  }, []);

  const pessoasInicial = useEffect(() => {
    fetch(urlPessoas)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setColaboradores(dados);
      });
  }, []);

  const [colaboradores, setColaboradores] = useState(pessoasInicial);
  const [exibirFormulario, setExibirFormulario] = useState(false);

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

  function criarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        criarTime={criarTime}
        times={Array.isArray(times) ? times.map((time) => time.nome) : []}
        aoColaboradorCadastrado={(colaborador) =>
          colaboradorAdicionado(colaborador)
        }
        exibir={exibirFormulario}
      />
      <section className="secao">
        <TituloSecao nome="Minha Organização:" />
        <ExibirEsconderFormularios
          exibir={exibirFormulario}
          aoAlternar={() => setExibirFormulario(!exibirFormulario)}
        />
      </section>
      {times.map((time, index) => (
        <Time
          key={index}
          time={time}
          alterarCor={alterarCorDoTime}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
