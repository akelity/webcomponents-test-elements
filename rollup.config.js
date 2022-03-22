import * as fs from 'fs';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

const components = fs.readdirSync('src', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const elements = components.map((component) => {
  const config = {
    input: `src/${component}/index.js`,
    output: {
      file: `dist/${component}.bundled.esm.js`,
      format: 'esm',
    },
    plugins: [
      resolve(),
      terser(),
      summary()
    ]
  };
  return config;
});


export default elements;
