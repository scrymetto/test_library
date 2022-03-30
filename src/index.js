import Menu from './components/Menu.svelte';

import { mountWithReplace } from './utils';

import './styles.scss';

export default class {
  constructor({
                root = '.js-menu',
                hasAnother = true,
              }) {
    const $elemDesktop = document.querySelector(root);
    const props = {
      hasAnother,
    };

    if ($elemDesktop) {
      mountWithReplace(Menu, { target: $elemDesktop, props });
    }
  }
}
