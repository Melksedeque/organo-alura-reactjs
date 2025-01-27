import "./ListaSuspensa.css";

const ListaSuspensa = ({
  label,
  itens,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
      >
        <option value="" disabled defaultValue>
          -- Escolha uma opção --
        </option>
        {Array.isArray(itens) &&
          itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default ListaSuspensa;
