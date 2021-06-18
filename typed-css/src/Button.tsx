import { createStyled } from "./styled";

const styled = createStyled();

export interface ButtonProps {
  type?: "default" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = styled.button<ButtonProps>`
  --layout: row;
  --layout-gap: 8px, 12px;
`;

Button.type("primary")`
  background: blue;
`;

Button.type("secondary")`
  background: grey;
`;

Button.size("small")`
  font-size: 12px;
  padding: 2px;
`;

Button.size("large")`
  font-size: 16px;
  padding: 6px;
`;
