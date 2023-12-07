<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./routes/About.svelte";
  import Contact from "./routes/Contact.svelte";

  const routes = {
    "/": Home,
    "/about": About,
    "/contact": Contact
  };
</script>

<Header />
<Router {routes} />
<Footer />
