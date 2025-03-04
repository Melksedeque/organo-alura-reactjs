import "./Campo.css";

interface CampoProps {
  label: string;
  type: "text" | "date" | "password" | "email" | "tel" | "number";
  placeholder: string;
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
}

const Campo = ({
  label,
  type = "text",
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}: CampoProps) => {
  const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
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
