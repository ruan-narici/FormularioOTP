import Title from './Title';
import Button from './Button';
import styles from './Form.module.scss';
import InputCode from './InputCode';

export default function Form() {
  return (
    <form className={ styles.form }>
      <Title />
      <InputCode />
      <Button />
    </form>
  );
}