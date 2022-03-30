<script>
  import Lazy from './Lazy.svelte';

  const { hasAnother } = $$props;
</script>

<Lazy
  loadComponent={() => import(/* webpackChunkName: "anotherButton" */ './Another.svelte')}
  isShowing={hasAnother}
>
  <div slot='loading'>Loading...</div>
  <svelte:fragment slot='component' let:Component>
    <Component {...$$props} />
  </svelte:fragment>
</Lazy>

<Lazy
  loadComponent={() => import(/* webpackChunkName: "withoutButton" */ './Without.svelte')}
  isShowing={!hasAnother}
>
  <div slot='loading'>Loading...</div>
  <svelte:fragment slot='component' let:Component>
    <Component {...$$props} />
  </svelte:fragment>
</Lazy>
