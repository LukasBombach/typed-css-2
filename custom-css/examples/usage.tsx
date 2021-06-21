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

type Variants<T extends string> = Record<T, ((value: any) => Style) | Style>;

/**
 * Setup | Tooling
 */
function component<T extends string>(
  style: Style,
  variants?: Variants<T>
): FC {}

function variant<T extends Record<string, Style>>(
  options: T
): (value: any) => Style {}

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

const xs: Style = {
  padding: [0, 12],
  minWidth: 24,
  fontSize: 12,
};

const s: Style = {
  padding: [0, 15],
  minWidth: 30,
  fontSize: 14,
};

const m: Style = {
  padding: [0, 20],
  minWidth: 40,
  fontSize: 16,
};

const l: Style = {
  padding: [0, 25],
  minWidth: 50,
  fontSize: 16,
};

const xl: Style = {
  padding: [0, 30],
  minWidth: 60,
  fontSize: 18,
};

// const size = (size: "s" | "m" | "l" | "xl") =>
//   ({
//     s,
//     m,
//     l,
//     xl,
//   }[size]);

const size = variant({ s, m, l, xl });

const Button = component(button, { positive, size });
