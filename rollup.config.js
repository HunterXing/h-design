import path from 'path';
import fs from 'fs';
import esbuild from 'rollup-plugin-esbuild';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import commonjs from 'rollup-plugin-commonjs';

// not comps files
const NOT_COMPS = ['index.js', 'utils', 'hooks', 'styles'];

// 筛选出需要打包的组件
let comps = fs.readdirSync('./packages');
comps = comps.filter((v) => !NOT_COMPS.includes(v));

// format by { input: 'packages/Button/index.js', name: 'h-button' }
// 此处输出的是单独的组件的包，为了按需引入
const inputComps = comps.map((fileName) => ({
  input: `packages/${fileName}/index.js`,
  name: `h${fileName.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
}));

// 这是整个大的包
const defaultComps = [{ input: 'packages/index.js', name: 'h-design' }];
// 将要打包输出的组件
const inputs = [...defaultComps, ...inputComps];

// rollup config
export default inputs.map((com) => ({
  input: path.resolve(__dirname, com.input), // 输入
  output: [
    {
      name: com.name,
      file: `es/${com.name}.js`,
      format: 'esm', //  五种输出格式：amd / esm / iife / umd / cjs / system
    },
    {
      name: com.name,
      file: `lib/${com.name}.js`,
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [
    scss(),
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    commonjs(),
    nodeResolve(),
    esbuild(),
  ],
  external: ['vue', 'core-js'], // 告诉rollup不要将这些依赖打包，而作为外部依赖
}));
