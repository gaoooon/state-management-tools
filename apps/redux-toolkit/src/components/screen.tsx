import React from "react";
import * as S from "../style";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Screen: React.FC = () => {
  const { count } = useSelector((state: RootState) => state);

  return <S.Screen>{count}</S.Screen>;
};

export default Screen;
