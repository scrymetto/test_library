export const FIRST = 'first';
export const SECOND = 'second';
export const THIRD = 'third';
export const FOURTH = 'fourth';

export const LINKS = [
  {
    id: FIRST,
    link: '/first',
    icon: 'octopus',
    name: "first"
  },
  {
    id: SECOND,
    link: '/second',
    icon: 'dino',
    name: "second"
  },
  {
    id: THIRD,
    link: '/third',
    name: "third",
    icon: 'flower'
  },
  {
    id: FOURTH,
    link: '/fourth',
    name: "fourth",
    icon: 'bzz'
  },
];

export function mountWithReplace(Component, options) {
  const frag = document.createDocumentFragment();
  const component = new Component({...options, target: frag});

  if (options.target.parentNode) {
    options.target.parentNode.replaceChild(frag, options.target);
  }

  return component;
}
