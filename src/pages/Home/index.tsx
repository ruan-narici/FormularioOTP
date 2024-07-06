import { useState } from 'react';
import Form from '../../components/Form';

export default function Home() {
  const [otp, setOtp] = useState(new Array(5).fill(''));

  return (
    <>
      <Form otp={ otp } setOtp={ setOtp } />
    </>
  );
}