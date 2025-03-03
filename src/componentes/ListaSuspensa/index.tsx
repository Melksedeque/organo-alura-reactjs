import Select from "react-select";
import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  itens: string[];
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
}

const ListaSuspensa = ({
  label,
  itens,
  valor,
  aoAlterado,
  obrigatorio = false,
}: ListaSuspensaProps) => {
  const options = itens.map((item) => ({ value: item, label: item }));

  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <Select
        options={options}
        value={options.find((option) => option.value === valor)}
        onChange={(selectedOption) =>
          aoAlterado(selectedOption ? selectedOption.value : "")
        }
        required={obrigatorio}
      />
    </div>
  );
};

export default ListaSuspensa;
