import * as path from 'path';
import vuePlugin from 'rollup-plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import CleanCSS from 'clean-css';

const input = path.resolve(__dirname, 'src/index.js');
const createOutput = (file) => ({
  file,
  name: 'VueMoCropper',
  format: 'umd',
  globals: {
    alloyfinger: 'AlloyFinger',
    vue: 'Vue',
  },
});
const plugins = [
  commonjs(),
  vuePlugin({
    preprocessStyles: true,
  })
];

export default [
  {
    input,
    output: createOutput('dist/mocropper.js'),
    external: ['alloyfinger', 'vue'],
    plugins: plugins.concat([
      scss({
        output: 'dist/mocropper.css'
      })
    ])
  },
  {
    input,
    output: createOutput('dist/mocropper.min.js'),
    external: ['alloyfinger', 'vue'],
    plugins: plugins.concat([
      scss({
        output: 'dist/mocropper.min.css',
        processor: css => new CleanCSS().minify(css).styles
      }),
      terser()
    ])
  },
];
