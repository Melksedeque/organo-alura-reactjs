import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={(e) => props.aoAlterado(e.target.value)}
      >
        <option value="" data-default disabled selected>
          -- Escolha uma opção --
        </option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
