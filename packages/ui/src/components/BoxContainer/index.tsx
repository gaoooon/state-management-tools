import { ReactNode } from "react";
import * as S from "./style";

const BoxContainer = ({ children }: { children: ReactNode }) => {
  return <S.CounterContainer>{children}</S.CounterContainer>;
};

export default BoxContainer;
