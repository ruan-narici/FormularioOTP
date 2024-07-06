import Title from './Title';
import Button from './Button';
import styles from './Form.module.scss';
import InputCode from './InputCode';
import { FormEvent } from 'react';

interface Props {
  otp: string[], 
  setOtp: any
}

export default function Form({ otp, setOtp }: Props) {
  function onSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(`Seu código OTP é: ${ otp.join('') }`);
    event.currentTarget.reset();
  }

  return (
    <form 
      className={ styles.form } 
      method='POST' 
      onSubmit={ (event) => onSubmitForm(event) }>
      <Title />
      <InputCode otp={ otp } setOtp={ setOtp } />
      <Button />
    </form>
  );
}