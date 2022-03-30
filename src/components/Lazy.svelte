<script>
  export let loadComponent;
  export let isShowing;
</script>

{#if isShowing}
  {#await loadComponent()}
    <slot name='loading'>Loading...</slot>
  {:then { default: Component }}
    <slot name='component' {Component} />
  {/await}
{/if}
