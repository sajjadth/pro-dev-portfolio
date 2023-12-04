<script lang="ts">
  let currentPath = window.location.hash.slice(2, window.location.hash.length).toLowerCase();
  const updatePath = () =>
    (currentPath = window.location.hash.slice(2, window.location.hash.length)).toLowerCase();
  window.addEventListener("hashchange", updatePath);
</script>

<header class="container">
  <nav class="w-100 d-flex flex-row align-items-center justify-content-start">
    <a href="/#" class="not-link">
      <div id="navbar-icon" />
    </a>
    <ul class="w-100 d-flex flex-row align-items-center justify-content-end">
      <li class="link">
        <a href="#/about" id={currentPath === "about" ? "active-link" : ""}>About</a>
      </li>
      <li class="link">
        <a href="#/projects" id={currentPath === "projects" ? "active-link" : ""}>Projects</a>
      </li>
      <li class="link">
        <a href="#/contact" id={currentPath === "contact" ? "active-link" : ""}>Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss" scoped>
  header {
    padding: 16px;
    margin-block: 32px;
    nav {
      #navbar-icon {
        width: 30px;
        height: 30px;
        background: url("src/assets/images/stacks.svg") center no-repeat;
        background-size: cover;
        transition: all 250ms ease;
        fill: green !important;
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
          transition: all 250ms ease;
        }
        &:active {
          transform: scale(0.9);
        }
      }
      ul {
        li {
          list-style-type: none;
          padding: 8px 16px;
        }
      }
    }
  }
</style>
