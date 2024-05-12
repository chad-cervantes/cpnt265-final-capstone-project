<script>
  import "../app.css";
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import { onMount } from 'svelte';

onMount(() => {
    document.querySelector('link[rel="icon"]').href = 'static/favicon.ico';
});
</script>
<Header />
<slot />
<Footer />