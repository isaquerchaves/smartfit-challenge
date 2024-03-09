import styles from "./Form.module.css";
import clock from "../../../images/icon-hour.png";
import React from "react";
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { search } from "../../../services/service";

const Form = ({ set }: { set: React.Dispatch<React.SetStateAction<any>> }) => {
  const [selected, setSelected] = React.useState<any>("");
  const [showUnitClosed, setShowUnitClosed] = React.useState(false);

  const handleClick = (event: any) => {
    event.preventDefault();
    search(set, { showUnitClosed, selected });
  };
  const handleClickClear = (event: any) => {
    event.preventDefault();
    set(null);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchTitle}>
        <img src={clock} alt="clock" className={styles.iconHour} />
        <span>Horário</span>
      </div>
      <p className={styles.searchSubtitle}>Qual periodo quer treinar?</p>
      <form className={styles.form}>
        <Radio
          options={[
            { weekdays: "Manhã", hour: "06:00 às 12:00" },
            { weekdays: "Tarde", hour: "12:01 às 18:00" },
            { weekdays: "Noite", hour: "18:01 às 23:00" },
          ]}
          name="horario"
          set={setSelected}
        />
        <br />
        <Checkbox
          label="Exibir unidades fechadas"
          id="showUnit"
          value={showUnitClosed}
          set={setShowUnitClosed}
        />
        <br />
        <div className={styles.button}>
          <Button
            backgroundColor="yellow"
            value="encontrar unidade"
            classe="warning fw-bold"
            set={handleClick}
          />
          <Button
            backgroundColor="white"
            value="Limpar"
            classe=" bg-body-secondary fw-bold"
            set={handleClickClear}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
