import Logo from '../../Logo';
import styles from './Title.module.scss';

export default function Title() {
  return (
    <fieldset className={ styles.container }>
      <Logo />
      <h1 className={ styles.container__title }>
        Preencha o Código
      </h1>
      <p className={ styles.container__description }>
        Enviamos um código por email e por SMS
      </p>
    </fieldset>
  );
}