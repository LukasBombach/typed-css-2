import { Property } from "csstype";

/**
 * Setup | Atoms
 */
type BackgroundProps = "color" | "opacity";

const grid = "display: grid";
const gridRow = "grid-auto-flow: row";
const gridColumn = "grid-auto-flow: column";

const number = (num: number) => num.toString();
const background = (...props: BackgroundProps[]) => props.join(" ");

/**
 * Setup | Intentions
 */
const intentions = {
  layout: {
    row: [grid, gridRow],
    column: [grid, gridColumn],
  },
  gap: number,
  padding: number,
  background: number,
};

/**
 * Setup | Types
 */
// type Intentions = typeof intentions;
// type Name = keyof Intentions;
// type Value<N extends Name> = Intentions[N] extends typeof number
//   ? number
//   : keyof Intentions[N];
// type Style = { [N in Name]?: Value<N> };

interface Style {
  layout: "row" | "column";
  background: Property.Background[] | Property.Background;
}

/**
 * Usage | Design Language
 */
const button: Style = {
  layout: "row",
  background: ["blue"],
};
