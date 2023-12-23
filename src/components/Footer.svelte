<footer class="container d-flex flex-row align-items-center justify-content-start">
  <a class="not-link social-link" id="github" href="https://github.com/sajjadth" target="_blank">
  </a>
  <a
    class="not-link social-link"
    id="linkedin"
    href="https://linkedin.com/in/sajjadth"
    target="_blank"
  >
  </a>
  <a class="not-link social-link" id="x" href="https://twitter.com/sajjaadth" target="_blank"> </a>
  <a class="not-link social-link" id="twitch" href="https://twitch.com/SonTheWitch" target="_blank">
  </a>
  <a
    class="not-link social-link"
    id="bmc"
    href="https://www.buymeacoffee.com/sajjadth"
    target="_blank"
  >
  </a>
</footer>

<style lang="scss" scoped>
  @use "src/styles/_variables.sass";
  @use "src/styles/_colors.sass";

  footer {
    padding-block: 32px !important;
    width: 725px !important;
    @media (min-width: variables.$breakpoint-sm) {
      padding-inline: 0;
    }
    @media (max-width: variables.$breakpoint-lg) {
      width: 100% !important;
    }
    .social-link {
      width: 20px;
      height: 20px;
      transition: all 250ms ease;
      margin-right: 16px;
      background-size: contain !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      &:hover {
        transition: all 250ms ease;
        transform: scale(1.1);
      }
      &:active {
        transition: all 250ms ease;
        transform: scale(0.9);
      }
    }
    #github {
      background: url("/images/github.svg");
    }
    #linkedin {
      background: url("/images/linkedin.svg");
    }
    #x {
      background: url("/images/x.svg");
    }
    #twitch {
      background: url("/images/twitch.svg");
    }
    #bmc {
      background: url("/images/bmc.svg");
      background-size: auto 100%;
    }
  }
</style>
