import React from "react";
import { countAtom } from "./recoil/count";
import { useRecoilState } from "recoil";

const App: React.FC = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return <div></div>;
};

export default App;
