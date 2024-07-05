import styles from './Button.module.scss';

export default function Button() {
  return (
    <fieldset className={ styles.submit }>
      <button type="submit">Verificar OTP</button>
    </fieldset>
  );
}