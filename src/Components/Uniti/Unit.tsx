import { clearString } from "../../services/functions";
import LegendUnit from "../Legend/LegendUnit";
import styles from "./Unit.module.css";
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

const Unit = (units: any) => {
  const [data, setData] = React.useState<any[]>();
  const imagesMask = [
    { image: required_mask, subtitle: "Obrigatorio", value: "required" },
    { image: recommended_mask, subtitle: "Recomendado", value: "recommended" },
  ];
  const imagesTowel = [
    { image: required_towel, subtitle: "Obrigatorio", value: "required" },
    { image: recommended_towel, subtitle: "Recomendado", value: "recommended" },
  ];
  const imagesFountain = [
    { image: forbidden_fountain, subtitle: "Proibido", value: "forbidden" },
    { image: partial_fountain, subtitle: "Parcial", value: "partial" },
  ];
  const imagesLockerroom = [
    { image: required_lockerroom, subtitle: "Obrigatório", value: "required" },
    { image: forbidden_lockerroom, subtitle: "Proibido", value: "forbidden" },
    { image: partial_lockerroom, subtitle: "Parcial", value: "partial" },
  ];

  React.useEffect(() => {
    async function resolve() {
      const a = await units;
      setData(a.units);
    }

    resolve();
  }, [units]);

  return (
    <>
      {data == null ? (
        <p>Aguarde...</p>
      ) : (
        data.map((d: any, i: any) => (
          <div className={styles.unit} key={i}>
            <p className={styles.status}>
              {d.opened ? (
                <span className={styles.opened}>Aberto</span>
              ) : (
                <span className={styles.closed}>Fechado</span>
              )}
            </p>
            <h2>{d.title}</h2>
            {d.content ? (
              <span className={styles.subtitle}>{clearString(d.content)}</span>
            ) : (
              <span className={styles.subtitle}>Sem informações</span>
            )}   
            <hr />
            <div className={styles.legendUnit}>
              <LegendUnit
                images={imagesMask.filter((img) => img.value === d.mask)}
              />
              <LegendUnit
                images={imagesTowel.filter((img) => img.value === d.towel)}
              />
              <LegendUnit
                images={imagesFountain.filter(
                  (img) => img.value === d.fountain
                )}
              />
              <LegendUnit
                images={imagesLockerroom.filter(
                  (img) => img.value === d.locker_room
                )}
              />
            </div>
            <div className={styles.schedules}>
              {d.schedules &&
                d.schedules.map((sch: any, i: any) => (
                  <span key={i}>
                    <p>
                      <strong>{sch.weekdays}</strong>
                    </p>
                    <p>{sch.hour}</p>
                  </span>
                ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Unit;
