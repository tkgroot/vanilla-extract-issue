import { customElementJsxPlugin } from 'custom-element-jsx-integration';
import { customElementReactWrapperPlugin } from 'custom-element-react-wrappers';

/** @type {Partial<CustomElementsManifestAnalyzer.UserConfigOptions>} */
export default {
  globs: ['**/src/**/*.ts'],
  outdir: 'dist',
  packagejson: true,
  litelement: true,
  plugins: [
    customElementJsxPlugin({ outdir: 'dist' }),
    customElementReactWrapperPlugin({
      outdir: 'dist/react',
      descriptionSrc: 'description',
      hideMethodDocs: true,
      defaultExport: false,
    }),
  ],
};
