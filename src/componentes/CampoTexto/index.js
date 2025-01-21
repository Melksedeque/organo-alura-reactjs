import "./CampoTexto.css";

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}: </label>
      <input
        type={props.text}
        placeholder={props.placeholder}
        required={props.obrigatorio}
      />
    </div>
  );
};

export default CampoTexto;
