import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, alterarCor, aoDeletar }) => {
  const estiloTime = { backgroundColor: time.corSecundaria };
  console.log(time.corSecundaria);
  return (
    colaboradores.length > 0 && (
      <section className="time" style={estiloTime}>
        <input
          type="color"
          className="input-cor"
          value={time.corSecundaria}
          onChange={(e) => alterarCor(e.target.value, time.nome)}
        />
        <header>
          <h3>{time.nome}</h3>
          <span style={{ backgroundColor: time.corPrimaria }}></span>
        </header>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => {
            return (
              <Colaborador
                key={index}
                cor={time.corPrimaria}
                colaborador={colaborador}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
