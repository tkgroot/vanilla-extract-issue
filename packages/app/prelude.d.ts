import { CustomElements } from 'lit-component/custom-elements';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends CustomElements {}
    }
  }
}
