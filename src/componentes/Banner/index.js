import "./Banner.css";

function Banner() {
  return (
    <figure className="banner">
      <img
        src="/imagens/banner.png"
        alt="Banner Principal da página do Organo"
      />
      <figcaption sr-only>Banner principal da página do Organo</figcaption>
    </figure>
  );
}

export default Banner;
