<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Header from "./components/Header.svelte";

  const routes = {
    "/": Home,
  };
</script>

<Header />
<Router {routes} />
