import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ButtonBox = styled.div`
  margin-top: 4rem;
  display: flex;
  column-gap: 4.81rem;
`;

export const Button = styled.button<{ id: string }>`
  background-color: ${({ id }) => (id === "+" ? "#E35D5D" : "#5486E7")};
  color: #fff;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const Text = styled.p<{ type: string }>`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  display: inline-block;
  ${({ type }) => type === "-" && "margin-bottom: 0.3rem"};
`;

export const StateManagementName = styled.p`
  margin-top: 4rem;
  color: #000;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

export const Screen = styled.div`
  width: 16.375rem;
  height: 9.6875rem;
  border-radius: 0.625rem;
  background: #000;
  margin-top: 1.06rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
`;
