import Title from './Title';
import Button from './Button';
import styles from './Form.module.scss';
import InputCode from './InputCode';

interface Props {
  otp: string[], 
  setOtp: any
}

export default function Form({ otp, setOtp }: Props) {
  return (
    <form className={ styles.form }>
      <Title />
      <InputCode otp={ otp } setOtp={ setOtp } />
      <Button />
    </form>
  );
}