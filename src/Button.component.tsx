import { createStyled } from "./styled";

const styled = createStyled();

export interface ButtonProps {
  type?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  background: black;
  border: none;
  padding: 4px;
`;

Button.type("primary")`
  background: blue;
`;

Button.type("secondary")`
  background: blue;
`;
