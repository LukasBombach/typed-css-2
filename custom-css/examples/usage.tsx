import type { FC } from "react";

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

type Style = Partial<{
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

type Variants<T extends string> = Record<T, Style>;

/**
 * Setup | Tooling
 */

function component<T extends string>(
  style: Style,
  variants?: Variants<T>
): FC {}

/**
 * Usage | Design Language
 */
const button: Style = {
  padding: [0, 20],
  minWidth: 40,
  borderRadius: 4,
  background: "#1fb6ff",
  color: "#fff",
  fontSize: 16,
  whiteSpace: "nowrap",
  userSelect: false,
};

const positive: Style = {
  background: "#13ce66",
};

const Button = component(button, { positive });
