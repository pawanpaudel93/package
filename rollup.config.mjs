import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const external = [
    "axios",
    "@auth0/auth0-spa-js",
    "jwt-decode",
    "crypto-hash",
    "jwk-to-pem",
    "permawebjs/wallet",
    "jsrsasign",
    "crypto-js"
]

const plugins = [
        commonjs(),
        typescript({
            declaration: false,
        }),
        terser(),
]

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.mjs",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins,
    external,
};
