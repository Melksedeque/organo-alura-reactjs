import "./TituloSecao.css";

const TituloSecao = ({ nome }) => {
  return (
    <div className="titulo-secao">
      <h2>{nome}</h2>
    </div>
  );
};

export default TituloSecao;
