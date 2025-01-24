import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const estiloTime = { backgroundColor: props.corSecundaria };

  return (
    <section className="time" style={estiloTime}>
      <header>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      </header>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            cor={props.corPrimaria}
            foto={colaborador.imagem}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
