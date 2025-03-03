import "./Botao.css";
import React, { ReactElement } from "react";

interface BotaoProps {
  texto: string;
  children: ReactElement;
}

const BotaoSubmit = (props: BotaoProps) => {
  return <button className="botao-submit">{props.children}</button>;
};

export default BotaoSubmit;
