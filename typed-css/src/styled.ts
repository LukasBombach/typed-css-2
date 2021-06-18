import type { FC } from "react";

export type Tag = keyof JSX.IntrinsicElements;
export type TagProps<T extends Tag> = JSX.IntrinsicElements[T];
export type Props = Partial<Record<string, any>>;
type CSS = TemplateStringsArray;
type Expr = string[];

export type StyledTaggedTemplate<T extends Tag> = <P extends Props>(
  css: CSS,
  ...expr: Expr
) => FC<P & TagProps<T>> & Variants<P>;

export type Variants<P extends Props> = {
  [K in keyof P]: (value: P[K]) => (css: CSS, ...expr: Expr) => void;
};

export type Styled = {
  [T in Tag]: StyledTaggedTemplate<T>;
};

export function createStyled(): Styled {}

export function css(code: TemplateStringsArray, ...expr: string[]): string {}
