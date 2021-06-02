import React from 'react';
import { Container, Logo, InfoText } from './index.styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Logo source={require('../../assets/loading.gif')} />
      <InfoText>Loading...</InfoText>
    </Container>
  );
};

export default Home;
