import "./CampoTexto.css";

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}: </label>
      <input type="text" name="nome" value="" placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
