import "./Botao.css";
import { ReactNode } from "react";

interface BotaoProps {
  children: ReactNode;
}

const BotaoSubmit = ({ children }: BotaoProps) => {
  return <button className="botao-submit">{children}</button>;
};

export default BotaoSubmit;
