import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores }) => {
  const estiloTime = { backgroundColor: time.corSecundaria };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={estiloTime}>
        <header>
          <h3>{time.nome}</h3>
          <span style={{ backgroundColor: time.corPrimaria }}></span>
        </header>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => {
            console.log("Renderizando o colaborador");
            return (
              <Colaborador
                key={index}
                cor={time.corPrimaria}
                colaborador={colaborador}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
