import React from "react";
import * as S from "./style";
import Sreen from "./components/sreen";
import Button from "./components/button";

const App: React.FC = () => {
  return (
    <S.Container>
      <S.CounterContainer>
        <Sreen />
        <S.ButtonBox>
          <Button type="-" />
          <Button type="+" />
        </S.ButtonBox>
        <S.StateManagementName>recoil</S.StateManagementName>
      </S.CounterContainer>
    </S.Container>
  );
};

export default App;
