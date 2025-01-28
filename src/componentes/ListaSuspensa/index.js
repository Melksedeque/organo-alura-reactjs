import Select from "react-select";
import "./ListaSuspensa.css";

const ListaSuspensa = ({
  label,
  itens,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  const options = itens.map((item) => ({ value: item, label: item }));

  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <Select
        isMulti
        options={options}
        value={options.filter((option) => valor.includes(option.value))}
        onChange={(selectedOptions) =>
          aoAlterado(
            selectedOptions ? selectedOptions.map((option) => option.value) : []
          )
        }
        required={obrigatorio}
      />
    </div>
  );
};

export default ListaSuspensa;
