import { createStyled } from "./styled";

const styled = createStyled();

export interface ButtonProps {
  type?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  background: black;
  border: none;
  padding: 4px;

  &[type="primary"] {
    background: blue;
  }

  &[type="secondary"] {
    background: grey;
  }
`;
