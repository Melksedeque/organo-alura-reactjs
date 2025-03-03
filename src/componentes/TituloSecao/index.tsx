import "./TituloSecao.css";

interface TituloSecaoProps {
  nome: string;
}

const TituloSecao = ({ nome }: TituloSecaoProps) => {
  return (
    <div className="titulo-secao">
      <h2>{nome}</h2>
    </div>
  );
};

export default TituloSecao;
