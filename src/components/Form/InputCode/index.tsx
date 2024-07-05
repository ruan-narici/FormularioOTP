import styles from './InputCode.module.scss';

export default function InputCode() {
  return (
    <fieldset className={ styles.buttons }>
      <input type="number" required/>
      <input type="number" required/>
      <input type="number" required/>
      <input type="number" required/>
      <input type="number" required/>
    </fieldset>
  );
}