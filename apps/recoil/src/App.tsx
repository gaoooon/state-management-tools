import React from "react";
import * as S from "./style";
import Screen from "./components/screen";
import Button from "./components/button";
import { BoxContainer } from "ui";

const App: React.FC = () => {
  return (
    <S.Container>
      <BoxContainer>
        <Screen />
        <S.ButtonBox>
          <Button type="-" />
          <Button type="+" />
        </S.ButtonBox>
        <S.StateManagementName>zustand</S.StateManagementName>
      </BoxContainer>
    </S.Container>
  );
};

export default App;
