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
        <Colaborador cor={props.corPrimaria} foto={""} nome={""} cargo={""} />
      </div>
    </section>
  );
};

export default Time;
