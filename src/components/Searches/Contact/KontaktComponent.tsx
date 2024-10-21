import React from "react";
import style from "./styleKontakt.module.css";

interface KontaktProps {
  adres: string;
  telefon: string;
  email: string;
  mapaUrl: string;
}

const KontaktComponent: React.FC<KontaktProps> = ({
  adres,
  telefon,
  email,
  mapaUrl,
}) => {
  return (
    <section className={style.kontakt}>
      <h2>Kontakt</h2>
      <div className={style.kontakt_info}>
        <p>
          <strong>Adres:</strong> {adres}
        </p>
        <p>
          <strong>Telefon:</strong> <a href={`tel:${telefon}`}>{telefon}</a>
        </p>
        <p>
          <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      <div className={style.kontakt_mapa}>
        <h3>Lokalizacja</h3>
        <img src={mapaUrl} alt="Mapa dojazdu" className={style.mapa} />
      </div>
    </section>
  );
};

export default KontaktComponent;
