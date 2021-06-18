import * as BabelTypes from "@babel/types";
import type { Visitor } from "@babel/traverse";

type BabelPlugin = <S>(babel: { types: typeof BabelTypes }) => {
  visitor: Visitor<S>;
};
const findImports: BabelPlugin = babel => {
  let name: string;

  return {
    visitor: {
      ImportDeclaration: {
        enter(path, state) {
          if (path.node.source.value !== "typed-css/styled") {
            return;
          }

          for (const s of path.node.specifiers) {
            if (babel.types.isImportSpecifier(s)) {
              name = s.local.name;
            }
          }
        },
      },
    },
  };
};

const x: BabelPlugin = babel => {
  let name: string;

  return {
    visitor: {
      Program: {
        enter(path, state) {
          path.traverse({
            ImportDeclaration: p => DetectStyledImportName(babel, p, state),
            TaggedTemplateExpression: p => {
              GenerateClassNames(babel, p, state, options);
              CollectDependencies(babel, p, state, options);
            },
          });
        },
      },
      ImportDeclaration: {
        enter(path, state) {
          if (path.node.source.value !== "typed-css/styled") {
            return;
          }

          for (const s of path.node.specifiers) {
            if (babel.types.isImportSpecifier(s)) {
              name = s.local.name;
            }
          }

          // path.node.specifiers.forEach(specifier => {
          //   if (!babel.types.isImportSpecifier(specifier)) {
          //     return;
          //   }
          //   if (specifier.local.name !== specifier.imported.name) {
          //     state.file.metadata.localName = specifier.local.name;
          //   }
          // });
        },
      },
    },
  };
};

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
