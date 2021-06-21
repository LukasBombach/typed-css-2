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

const colors = {
  marvel: "#1fb6ff",
  white: "#fff",
};

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

type Multi<T> = T[] | T;

type Props = Partial<{
  layout: "row" | "column";
  background: Multi<string>;
  padding: Multi<number>;
  minWidth: number;
  color: string;
  fontSize: number;
  borderRadius: number;
  whiteSpace: "nowrap";
  userSelect: boolean;
}>;

// type Variants<N extends string> = Record<N, Props>;
type Variants<N extends string> = Record<N, Props>;

class Style<V extends Variants<any>> {
  private props: Props;
  private variants: V;

  constructor(props: Props, variants: V) {
    this.props = props;
    this.variants = variants;
  }

  variant<N extends string>(name: N, props: Props): Style<V & N> {
    return new Style(this.props, { ...this.variants, [name]: props });
  }
}

/**
 * Setup | Tooling
 */

export function style(props: Props): Style<{}> {
  return new Style(props, {});
}

/**
 * Usage | Design Language
 */
const button: Props = {
  padding: [0, 20],
  minWidth: 40,
  borderRadius: 4,
  background: "#1fb6ff",
  color: "#fff",
  fontSize: 16,
  whiteSpace: "nowrap",
  userSelect: false,
};

const positive = style({
  background: "#13ce66",
});

const button = component(button, { positive });
