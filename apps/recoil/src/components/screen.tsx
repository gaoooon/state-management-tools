import React from "react";
import * as S from "../style";
import { useRecoilValue } from "recoil";
import { countAtom } from "../Atoms/countAtom";

const Screen: React.FC = () => {
  const count = useRecoilValue(countAtom);
  return <S.Screen>{count}</S.Screen>;
};

export default Screen;
