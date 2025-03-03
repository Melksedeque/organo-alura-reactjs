import "./Campo.css";

interface CampoProps {
  label: string;
  type: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
}

const Campo = ({
  label,
  type,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}: CampoProps) => {
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
