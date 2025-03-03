import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import TituloSecao from "./componentes/TituloSecao";
import ExibirEsconderFormularios from "./componentes/ExibirEsconderFormularios";
import { IColaborador } from "./compartilhado/interfaces/IColaborador";
import { ITimes } from "./compartilhado/interfaces/ITimes";

function App() {
  const urlTimes = "http://localhost:8080/times";
  const urlPessoas = "http://localhost:8080/pessoas";

  const [times, setTimes] = useState<ITimes[]>([]);
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  useEffect(() => {
    fetch(urlTimes)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTimes(dados);
      });
  }, []);

  useEffect(() => {
    fetch(urlPessoas)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setColaboradores(dados);
      });
  }, []);

  const [exibirFormulario, setExibirFormulario] = useState(false);

  const colaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id: number) {
    setColaboradores(
      colaboradores.filter((colaborador: IColaborador) => colaborador.id !== id)
    );
    return;
  }

  function alterarCorDoTime(cor: string, id: number) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function criarTime(novoTime: ITimes) {
    setTimes([...times, { ...novoTime, id: Math.floor(Math.random() * 100) }]);
  }

  function resolverFavorito(id: number) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner src="/imagens/banner.png" alt="O banner principal da página" />
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
