import React from "react";
import * as S from "../style";
import { useCountStore } from "../store/useCountStore";

interface Props {
  type: string;
}

const Button: React.FC<Props> = ({ type }) => {
  const { increase, decrease } = useCountStore();
  const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;
    switch (ID) {
      case "+":
        increase();
        break;

      case "-":
        decrease();
        break;
    }
  };

  return (
    <S.Button id={type} onClick={buttonClick}>
      <S.Text type={type}>{type}</S.Text>
    </S.Button>
  );
};

export default Button;
