<script lang="ts">
  let isMenuOpen = false;

  let currentPath = window.location.hash.slice(2, window.location.hash.length).toLowerCase();
  const updatePath = () => {
    if (isMenuOpen) isMenuOpen = false;
    currentPath = window.location.hash.slice(2, window.location.hash.length).toLowerCase();
  };
  window.addEventListener("hashchange", updatePath);
</script>

<header class="container">
  <nav class="w-100 d-flex flex-row align-items-center justify-content-start">
    <a href="/#" class="not-link">
      <div id="navbar-icon" />
    </a>
    <div
      id="menuToggle"
      class={`d-flex flex-column align-items-end justify-content-center ${
        isMenuOpen ? "fixed-menuToggle" : ""
      }`}
    >
      <input
        id="menuToggleCheckBox"
        bind:checked={isMenuOpen}
        on:click={() => (isMenuOpen = !isMenuOpen)}
        type="checkbox"
      />
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul
      class={`w-100 d-flex flex-row align-items-center justify-content-end ${
        isMenuOpen ? "checked" : ""
      }`}
    >
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
  @use "src/styles/_variables.sass";
  @use "src/styles/_colors.sass";

  .fixed-container {
    position: absolute;
    top: 0;
    z-index: 3;
  }
  header {
    padding: 16px;
    margin-block: 32px;
    nav {
      .fixed-menuToggle {
        position: fixed;
        top: 48px;
        right: 16px;
      }
      a {
        z-index: 3 !important;
      }
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
      #menuToggle {
        min-height: 30px;
        width: 100%;
        z-index: 4;

        @media (min-width: variables.$breakpoint-sm) {
          display: none !important;
        }

        input {
          display: block;
          width: 30px;
          height: 30px;
          cursor: pointer;
          position: absolute;
          opacity: 0;
          z-index: 4;
          &:checked ~ span {
            opacity: 1;
            transform: rotate(45deg) translate(-8px, -15px);
            &:nth-last-child(2) {
              opacity: 0;
              transform: rotate(0deg) scale(0.2, 0.2);
            }
            &:nth-last-child(3) {
              transform: rotate(-45deg) translate(-11px, 13px);
            }
          }
        }

        span {
          position: relative;
          display: block;
          width: 30px;
          height: 4px;
          margin-block: 2.5px;
          position: relative;
          background: #cdcdcd;
          border-radius: 3px;
          z-index: 2;
          transform-origin: 4px 0px;
          transition: all 500ms ease;
          &:first-child {
            transform-origin: 0% 0%;
          }
          &:nth-last-child(2) {
            transform-origin: 0% 100%;
          }
        }
      }
      ul {
        @media (max-width: variables.$breakpoint-sm) {
          // display: none !important;
          position: fixed;
          top: 0;
          left: 0;
          flex-direction: column !important;
          align-items: flex-start !important;
          justify-content: center !important;
          width: 100%;
          height: 100vh;
          opacity: 0;
          transition: all 250ms ease;
          background: #000 !important;
          z-index: 0;
          &::before {
            content: "";
            background-image: linear-gradient(colors.$dark-gray 1px, transparent 1px),
              linear-gradient(to right, colors.$dark-gray 1px, transparent 1px);
            background-size: 100px 100px;
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: -1;
            top: 50%;
            left: 50%;
            opacity: 0.5;
            transform: translate(-50%, -50%);
          }
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            z-index: -1;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-image: radial-gradient(at 40% 40%, #6495ed 0px, transparent 50%),
              radial-gradient(at 90% 10%, #ff4500 0px, transparent 50%),
              radial-gradient(at 50% 95%, #00ced1 0px, transparent 50%),
              radial-gradient(at 20% 30%, #2e8b57 0px, transparent 50%),
              radial-gradient(at 90% 90%, #4682b4 0px, transparent 50%),
              radial-gradient(at 33% 50%, #ff8c00 0px, transparent 50%),
              radial-gradient(at 79% 53%, #cd5c5c 0px, transparent 50%);
            opacity: 0.1;
          }
        }

        li {
          list-style-type: none;
          padding: 8px 16px;
        }
      }
      .checked {
        transition: all 250ms ease;
        opacity: 1;
        z-index: 3 !important;
      }
    }
  }
</style>
