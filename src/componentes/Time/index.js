import "./Time.css";

const Time = (props) => {
  const estiloTime = { backgroundColor: props.corSecundaria };

  return (
    <section className="time" style={estiloTime}>
      <header>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      </header>
      <div className="colaboradores">
        <div className="colaborador">
          <figure className="imagem-colaborador">
            <img src="" alt="Foto de Perfil da Juliana Amoasei" />
            <figcaption hidden>Juliana Amoasei</figcaption>
          </figure>
          <h4>Juliana Amoasei</h4>
          <p>Desenvolvedora de software e instrutora</p>
        </div>
      </div>
    </section>
  );
};

export default Time;
