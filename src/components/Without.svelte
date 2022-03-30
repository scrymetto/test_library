<script>
  import { closeIconState, menuState } from '../stores';
  import Button from './Button.svelte';
  import Lazy from './Lazy.svelte';

  export let locale;
  const hasAnother = false;
  let wrapRef;

  function onClick(e) {
    e.preventDefault();

    if ($menuState) {
      onClose();
    } else {
      menuState.open();
      closeIconState.add();
    }
  }

  function onClose() {
    menuState.close();
    closeIconState.remove();
  }

</script>

<div bind:this={wrapRef}>
  <Button {onClick} bind:hasCloseIcon={$closeIconState} />

  <Lazy
    loadComponent={() => import(/* webpackChunkName: "innerMenu" */ './InnerMenu.svelte')}
    bind:isShowing={$menuState}
  >
    <div slot='loading'>Loading...</div>
    <svelte:fragment slot='component' let:Component>
      <Component {wrapRef} {locale} {hasAnother} />
    </svelte:fragment>
  </Lazy>
</div>
