import "./Campo.css";

const Campo = ({
  label,
  type,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  const aoDigitado = (e) => {
    aoAlterado(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}: </label>
      <input
        type={type}
        value={valor}
        placeholder={placeholder}
        required={obrigatorio}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default Campo;
