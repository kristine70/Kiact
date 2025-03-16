import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import {defineConfig} from 'rollup';

export default defineConfig({
  input: 'packages/kiact/index.ts',
  output: [
    {
      file: 'app/kiact-library/index.js',
      format: 'es',
    },
  ],
  plugins: [typescript(), terser()],
  onwarn(warning, warn) {
    if (warning.plugin === 'typescript') return;
    warn(warning);
  },
  watch: {
    include: ['packages/**','app/src/**'],
  },
});
