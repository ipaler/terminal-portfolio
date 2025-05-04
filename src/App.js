import React from 'react';
import styled from 'styled-components';
import Terminal from './components/Terminal';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #282a36;
`;

const App = () => {
  return (
    <AppContainer>
      <Terminal />
    </AppContainer>
  );
};

export default App;