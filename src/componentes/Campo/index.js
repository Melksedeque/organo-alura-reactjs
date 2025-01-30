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
      <label htmlFor={label}>{label}: </label>
      <input
        type={type}
        id={label}
        name={label}
        value={valor}
        placeholder={placeholder}
        required={obrigatorio}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default Campo;
