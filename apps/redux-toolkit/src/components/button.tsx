import React from "react";
import * as S from "../style";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../store/countSlice";

interface Props {
  type: string;
}

const Button: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();

  const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;
    switch (ID) {
      case "+":
        dispatch(increase());
        break;

      case "-":
        dispatch(decrease());
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
