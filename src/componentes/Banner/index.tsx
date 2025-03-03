import "./Banner.css";
import React from "react";

interface BannerProps {
  src: string;
  alt?: string;
}

function Banner({ src, alt }: BannerProps) {
  return (
    <figure className="banner">
      {/* <img
        src="/imagens/banner.png"
        alt="Banner Principal da página do Organo"
      /> */}
      <img src={src} alt={alt} />
      <figcaption hidden>Banner principal da página do Organo</figcaption>
    </figure>
  );
}

export default Banner;
