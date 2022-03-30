import { writable } from 'svelte/store';

function createMenuState() {
  const { subscribe, set } = writable(false);

  return {
    subscribe,
    set,
    open: () => set(true),
    close: () => set(false),
  };
}

function createIconState() {
  const { subscribe, set } = writable(false);

  return {
    subscribe,
    set,
    add: () => set(true),
    remove: () => set(false),
  };
}

export const menuState = createMenuState();
export const closeIconState = createIconState();
