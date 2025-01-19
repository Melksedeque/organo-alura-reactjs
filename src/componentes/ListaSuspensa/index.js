import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select>
        <option value=""></option>
      </select>
    </div>
  );
};

export default ListaSuspensa;
