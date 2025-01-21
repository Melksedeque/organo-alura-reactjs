import "./CampoTexto.css";

const CampoTexto = (props) => {
  let valor = "Melk";

  const aoDigitado = (e) => {
    valor = e.target.value;
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}: </label>
      <input
        type={props.text}
        value={valor}
        placeholder={props.placeholder}
        required={props.obrigatorio}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default CampoTexto;
