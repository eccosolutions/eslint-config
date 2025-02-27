import type {Linter} from "eslint";

const config: Linter.Config = {
    env: {
        es6: true,
        node: true
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: ["@typescript-eslint", "import", "jsdoc", "prefer-arrow", "sonarjs"],
    parserOptions: {
        ecmaVersion: 2018
    },
    overrides: [
        {
            files: ["*.{,c,m}ts{,x}"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json"
            },
            rules: {
                "array-callback-return": "off",
                "consistent-return": "off",
                "dot-notation": "off",
                "no-invalid-this": "off",
                "no-unsafe-optional-chaining": "off",
                "no-unused-expressions": "off",
                "sonarjs/no-extra-arguments": "off",
                "sonarjs/no-ignored-return": "error",
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        default: "array-simple"
                    }
                ],
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/class-literal-property-style": "error",
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {assertionStyle: "as", objectLiteralTypeAssertions: "never"}
                ],
                "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
                "@typescript-eslint/consistent-type-imports": "error",
                "@typescript-eslint/dot-notation": "error",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowExpressions: true,
                        allowTypedFunctionExpressions: true
                    }
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        accessibility: "explicit"
                    }
                ],
                "@typescript-eslint/explicit-module-boundary-types": [
                    "error",
                    {
                        allowDirectConstAssertionInArrowFunctions: false,
                        allowHigherOrderFunctions: false
                    }
                ],
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/method-signature-style": "error",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: ["parameter"],
                        modifiers: ["unused"],
                        filter: "..",
                        format: ["strictCamelCase"],
                        leadingUnderscore: "allow",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["parameter"],
                        modifiers: ["unused"],
                        filter: "^.$",
                        format: null,
                        custom: {
                            regex: "^_$",
                            match: true
                        }
                    },
                    {
                        selector: ["variableLike", "enumMember"],
                        format: ["strictCamelCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["class", "interface", "typeAlias", "enum"],
                        format: ["StrictPascalCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["typeParameter"],
                        format: ["StrictPascalCase"],
                        prefix: ["T"],
                        filter: "..",
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["typeParameter"],
                        format: ["UPPER_CASE"],
                        custom: {
                            regex: "^[A-Z]$",
                            match: true
                        },
                        filter: "^.$"
                    }
                ],
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": [
                    "error",
                    {ignoreVoidOperator: true}
                ],
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-empty-object-type": "off",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-extra-semi": "off",
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-invalid-void-type": ["error", {allowAsThisParameter: true}],
                "@typescript-eslint/no-loop-func": "error",
                "@typescript-eslint/no-loss-of-precision": "error",
                "@typescript-eslint/no-require-imports": "off",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unnecessary-type-constraint": "error",
                "@typescript-eslint/no-unsafe-argument": "error",
                "@typescript-eslint/no-unsafe-function-type": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-unused-expressions": ["error", {enforceForJSX: true}],
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-wrapper-object-types": "error",
                "@typescript-eslint/non-nullable-type-assertion-style": "error",
                "@typescript-eslint/prefer-for-of": "off",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-nullish-coalescing": "error",
                "@typescript-eslint/prefer-optional-chain": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/prefer-return-this-type": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/require-array-sort-compare": [
                    "error",
                    {ignoreStringArrays: true}
                ],
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        allowNumber: true,
                        allowBoolean: true,
                        allowAny: false,
                        allowNullish: false
                    }
                ],
                "@typescript-eslint/require-await": "off",
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        allowString: false,
                        allowNumber: false,
                        allowNullableObject: false,
                        allowNullableBoolean: false,
                        allowNullableString: false,
                        allowNullableNumber: false,
                        allowAny: false
                    }
                ],
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        path: "always",
                        types: "prefer-import",
                        lib: "always"
                    }
                ],
                "@typescript-eslint/unified-signatures": "error",
                "no-underscore-dangle": "off"
            }
        },
        {
            files: ["*.{,c,m}tsx"],
            rules: {
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: ["variable", "parameter", "enumMember"],
                        format: ["strictCamelCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["function"],
                        format: ["strictCamelCase", "StrictPascalCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["class", "interface", "typeAlias", "enum"],
                        format: ["StrictPascalCase"],
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["typeParameter"],
                        format: ["StrictPascalCase"],
                        prefix: ["T"],
                        filter: "..",
                        leadingUnderscore: "forbid",
                        trailingUnderscore: "forbid"
                    },
                    {
                        selector: ["typeParameter"],
                        format: ["UPPER_CASE"],
                        custom: {
                            regex: "^[A-Z]$",
                            match: true
                        },
                        filter: "^.$"
                    }
                ]
            }
        },
        {
            files: [
                "*(_)test?(s)*(_)/**/*.{,c,m}ts{,x}",
                "test.{,c,m}ts{,x}",
                "*.test.{,c,m}ts{,x}",
                "*.test-d.{,c,m}ts{,x}"
            ],
            parserOptions: {
                project: "tsconfig.test.json"
            }
        },
        {
            files: [
                "*(_)test?(s)*(_)/**/*.{,c,m}{js,ts}{,x}",
                "test.{,c,m}{js,ts}{,x}",
                "*.test.{,c,m}{js,ts}{,x}",
                "*.config.{,c,m}{js,ts}{,x}"
            ],
            rules: {
                "@typescript-eslint/no-restricted-imports": "off"
            }
        }
    ],
    rules: {
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "complexity": "off",
        "consistent-return": "error",
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": ["error", "always", {null: "never"}],
        "guard-for-in": "error",
        "id-blacklist": "error",
        "id-match": "error",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "**/*(_)test?(s)*(_)/**/*.{,c,m}{js,ts}{,x}",
                    "**/*.config.{,c,m}{js,ts}{,x}",
                    "**/*.test.{,c,m}{js,ts}{,x}",
                    "**/*.test-d.{,c,m}ts{,x}",
                    "**/test.{,c,m}{js,ts}{,x}"
                ],
                optionalDependencies: false
            }
        ],
        "import/order": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "off",
        "jsdoc/no-types": "error",
        "max-classes-per-file": "off",
        "new-parens": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-constructor-return": "error",
        "no-duplicate-imports": "off",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-semi": "off",
        "no-implicit-coercion": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": ["error", {skipStrings: false}],
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "@typescript-eslint/no-restricted-imports": [
            "error",
            {
                patterns: [
                    "**/*(_)test?(s)*(_)/**/*",
                    "**/*.config",
                    "**/*.config.*",
                    "**/*.test",
                    "**/*.test.*"
                ]
            }
        ],
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": ["error", {allowInParentheses: false}],
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unneeded-ternary": "error",
        "no-unsafe-optional-chaining": ["error", {disallowArithmeticOperators: true}],
        "no-unused-expressions": "error",
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "prefer-arrow/prefer-arrow-functions": ["error", {allowStandaloneDeclarations: true}],
        "prefer-const": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-rest-params": "error",
        "prefer-regex-literals": ["error", {disallowRedundantWrapping: true}],
        "prefer-spread": "error",
        "radix": "error",
        "require-atomic-updates": "error",
        "require-unicode-regexp": "error",
        "strict": "error",
        "sonarjs/no-all-duplicated-branches": "error",
        "sonarjs/no-collapsible-if": "error",
        "sonarjs/no-collection-size-mischeck": "error",
        "sonarjs/no-duplicated-branches": "error",
        "sonarjs/no-element-overwrite": "error",
        "sonarjs/no-empty-collection": "error",
        "sonarjs/no-extra-arguments": "error",
        "sonarjs/no-gratuitous-expressions": "error",
        "sonarjs/no-identical-conditions": "error",
        "sonarjs/no-identical-expressions": "error",
        "sonarjs/no-identical-functions": "error",
        "sonarjs/no-inverted-boolean-check": "error",
        "sonarjs/no-one-iteration-loop": "error",
        "sonarjs/no-redundant-boolean": "error",
        "sonarjs/no-redundant-jump": "error",
        "sonarjs/no-unused-collection": "error",
        "sonarjs/no-use-of-empty-return-value": "error",
        "sonarjs/no-useless-catch": "error",
        "sonarjs/non-existent-operator": "error",
        "sonarjs/prefer-object-literal": "error",
        "sonarjs/prefer-while": "error"
    }
};

export = config;
