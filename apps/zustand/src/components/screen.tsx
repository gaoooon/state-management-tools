import React from "react";
import * as S from "../style";
import { useCountStore } from "../store/useCountStore";

const Screen: React.FC = () => {
  const { count } = useCountStore();
  return <S.Screen>{count}</S.Screen>;
};

export default Screen;
