import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container">
        <ul className="midias-sociais">
          <li className="item">
            <a
              href="https://www.facebook.com/AluraCursosOnline/"
              title="Link para Página do Facebook da Alura"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./imagens/fb.png" alt="Logo Facebook" />
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.instagram.com/aluraonline/"
              title="Link para Página do Instagram da Alura"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./imagens/ig.png" alt="Logo Instagram" />
            </a>
          </li>
          <li className="item">
            <a
              href="https://x.com/AluraOnline"
              title="Link para Página do Twitter da Alura"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./imagens/tw.png" alt="Logo Twitter" />
            </a>
          </li>
        </ul>
        <figure className="logo-rodape">
          <img src="./imagens/logo.png" alt="Logo Organo Rodapé" />
          <figcaption hidden>Logo Organo Rodapé</figcaption>
        </figure>
        <div className="copyright">
          <p>
            Desenvolvido por
            <a
              href="https://github.com/Melksedeque"
              target="_blank"
              rel="noreferrer"
            >
              Melksedeque Silva
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
