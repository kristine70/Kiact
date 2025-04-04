import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import {defineConfig} from 'rollup';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';

export default defineConfig({
  input: {
    'kiact/index': 'packages/kiact/index.ts',
    'kiact/index.d.ts': 'dist/packages/kiact/index.d.ts',
    'kiact-dom/index': 'packages/kiact-dom/index.ts',
    'kiact-dom/index.d.ts': 'dist/packages/kiact-dom/index.d.ts',
    'kiact/jsx-runtime': 'packages/kiact/src/jsx/jsx-runtime.ts',
  },
  output: [
    {
      dir: 'build',
      format: 'es',
    },
  ],
  plugins: [
    typescript(),
    terser(),
    dts(),
    copy({
      targets: [
        {src: 'packages/kiact/package.json', dest: 'build/kiact'},
        {src: 'packages/kiact-dom/package.json', dest: 'build/kiact-dom'},
      ],
    }),
  ],
  onwarn(warning, warn) {
    if (warning.plugin === 'typescript') return;
    warn(warning);
  },
  watch: {
    include: ['packages/**', 'app/src/**'],
  },
});
