import React, { useContext } from 'react';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';

const SignUp = () => {
  const { user } = useContext(AuthContext);

  const handleSignUp = () => {
    console.log(user);
  };

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Senha" />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
