import React from "react";
import * as S from "../style";
import { useSetRecoilState } from "recoil";
import { countAtom } from "../Atoms/countAtom";

interface Props {
  type: string;
}

const Button: React.FC<Props> = ({ type }) => {
  const setCount = useSetRecoilState(countAtom);
  const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;
    switch (ID) {
      case "+":
        setCount((prev) => prev + 1);
        break;

      case "-":
        setCount((prev) => prev - 1);
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
