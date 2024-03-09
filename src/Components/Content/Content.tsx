import Legend from "../Legend/Legend";
import styles from "./Content.module.css";
import React from "react";

import required_mask from "../../images/required-mask.png";
import recommended_mask from "../../images/recommended-mask.png";
import required_towel from "../../images/required-towel.png";
import recommended_towel from "../../images/recommended-towel.png";
import forbidden_fountain from "../../images/forbidden-fountain.png";
import partial_fountain from "../../images/partial-fountain.png";
import partial_lockerroom from "../../images/partial-lockerroom.png";
import forbidden_lockerroom from "../../images/forbidden-lockerroom.png";
import required_lockerroom from "../../images/required-lockerroom.png";
import Unit from "../Uniti/Unit";
import Form from "../Form/Form/Form";

const Content = () => {
  const [units, setUnits] = React.useState(null);

  const imagesMask = [
    { image: required_mask, subtitle: "Obrigatorio" },
    { image: recommended_mask, subtitle: "Recomendado" },
  ];
  const imagesTowel = [
    { image: required_towel, subtitle: "Obrigatorio" },
    { image: recommended_towel, subtitle: "Recomendado" },
  ];
  const imagesFountain = [
    { image: forbidden_fountain, subtitle: "Proibido" },
    { image: partial_fountain, subtitle: "Parcial" },
  ];
  const imagesLockerroom = [
    { image: required_lockerroom, subtitle: "Obrigatório" },
    { image: forbidden_lockerroom, subtitle: "Proibido" },
    { image: partial_lockerroom, subtitle: "Parcial" },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          reabertura <br />
          smart fit
        </h1>
        <p className={styles.description}>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
      <section className={styles.section2}>
        <Form set={setUnits} />
      </section>
      <section className={styles.section3}>
        <Legend title="Mascaras" images={imagesMask} />
        <Legend title="Toalhas" images={imagesTowel} />
        <Legend title="Bebedouros" images={imagesFountain} />
        <Legend title="Vestiarios" images={imagesLockerroom} />
      </section>
      <section className={styles.section4}>
        {units === null ? null : <Unit units={units} />}
      </section>
    </main>
  );
};

export default Content;
