import styles from './InputCode.module.scss';

interface Props {
  otp: string[], 
  setOtp: any
}

export default function InputCode({ otp, setOtp }: Props) {
  function onChangeInput(event: any, key: number) {
    if (isNaN(event.target.value)) {
      return false;
    } else if ( event.target.value.length > 1) {
      event.target.value = event.target.value[1];
    }

    setOtp(otp.map((code, index) => key === index ? event.target.value : code));
    if (event.target.value && event.target.nextSibling) {
      event.target.nextSibling.focus();
      event.target.nextSibling.value = '';
    }
  }

  function onKeyDownInput(event: any, key: number) {
    if (event.keyCode === 8) {
      event.target.value = '';
      setOtp(otp.map((code, index) => key === index ? event.target.value : code));

      if (event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
    } else if (event.keyCode === 39) {
      if (event.target.nextSibling) {
        event.target.nextSibling.focus();
      }
    } else if (event.keyCode === 37) {
      if (event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
    }
  }

  return (
    <fieldset className={ styles.buttons }>
      { otp.map((input, index) => (
        <input 
          key={ index } 
          maxLength={1} 
          type="number" 
          onChange={ (event) => onChangeInput(event, index) }
          onKeyDown={ (event) => onKeyDownInput(event, index) }
          required/>
      )) }
    </fieldset>
  );
}