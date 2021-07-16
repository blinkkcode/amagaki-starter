import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import notify from 'rollup-plugin-notify';
import typescript from '@rollup/plugin-typescript';



// Production state is based on whether we are watching for changes or not.
const production = !process.env.ROLLUP_WATCH;

export default [
    {
        input: 'src/ts/main.ts',
        output: {
            file: 'dist/js/main.min.js',
            format: 'iife'
        },
        plugins: [
            notify(),
            resolve(),
            typescript({
                noEmitOnError: false
            }),
            commonjs(),
            production && terser()
        ],
        sourcemap: true
    },
];
