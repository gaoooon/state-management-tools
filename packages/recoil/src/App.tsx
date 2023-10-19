import React from "react";
import * as S from "./style";
import Screen from "./components/screen";
import Button from "./components/button";

const App: React.FC = () => {
  return (
    <S.Container>
      <S.CounterContainer>
        <Screen />
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
