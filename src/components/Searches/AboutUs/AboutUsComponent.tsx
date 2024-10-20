import React from "react";
import style from "./AboutUsStyle.module.css";

const AboutUsComponent: React.FC = () => {
  const historiaFirmy = `
      Nasza firma PlantShop powstała w 2020 roku z pasji do roślin i natury. 
      Zaczynaliśmy jako mały rodzinny biznes, który z czasem przerodził się 
      w jeden z wiodących sklepów ogrodniczych w Polsce. Naszym celem jest 
      dostarczanie najwyższej jakości roślin do domów i ogrodów naszych klientów.
    `;

  const zdjeciaFirmy = [
    "../../../../public/assets/image/photohistory1.jpg",
    "../../../../public/assets/image/photohistory2.jpg",
    "../../../../public/assets/image/photohistory3.jpg",
    "../../../../public/assets/image/photohistory4.jpg",
    "../../../../public/assets/image/photohistory5.jpg",
    "../../../../public/assets/image/photohistory6.jpg",
    "../../../../public/assets/image/photohistory7.jpg",
    "../../../../public/assets/image/photohistory8.jpg",
    "../../../../public/assets/image/photohistory9.jpg",
    "../../../../public/assets/image/photohistory10.jpg",
    "../../../../public/assets/image/photohistory11.jpg",
  ];
  return (
    <section className={style.oNas}>
      <h2>O nas</h2>
      <div className={style.oNas_tresc}>
        <p>{historiaFirmy}</p>
      </div>

      <div className={style.galeria}>
        <h3>Nasza historia w zdjęciach</h3>
        <div className={style.zdjecia}>
          {zdjeciaFirmy.map((zdjecie, index) => (
            <img
              key={index}
              src={zdjecie}
              alt={`Historia firmy ${index + 1}`}
              className={style.zdjecie}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
