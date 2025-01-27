import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, alterarCor, aoDeletar, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(time.cor, "0.25") }}
      >
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(e) => alterarCor(e.target.value, time.id)}
        />
        <header>
          <h3>{time.nome}</h3>
          <span style={{ backgroundColor: time.cor }}></span>
        </header>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => {
            return (
              <Colaborador
                key={index}
                cor={time.cor}
                colaborador={colaborador}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
