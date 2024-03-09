import styles from './Button.module.css';

const Button = ({ value, backgroundColor, set }: any) => {
  const buttonClass =
        backgroundColor === 'yellow' ? styles.buttonYellow : styles.buttonWhite

  return (
    <>
      <button className={buttonClass} onClick={set}>{value}</button>
    </>
  );
}

export default Button;
