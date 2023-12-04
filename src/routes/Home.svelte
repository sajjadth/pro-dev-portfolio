<main class="w-100 h-100 container d-flex align-items-center justify-content-center flex-column">
  <article>
    <h1 id="title-name">I'm <span id="title-name-colored">Sajjad Tahmouresi</span></h1>

    <p>
      As a full-stack developer based in Iran, I dedicate my days to transforming lines of code into
      immersive web experiences. Specializing in JavaScript and Golang, I can seamlessly work with
      any new technology, embracing a versatile approach to bring ideas to life.
    </p>
    <p>
      My journey in technology is rooted in self-teaching, evolving from a passionate enthusiast to
      a proficient coder. I thrive on continuous learning, unafraid to explore new technologies and
      always open to trying new things.
    </p>
    <p>
      Beyond the screen, I find inspiration in simplicity and order, applying a minimalistic touch
      to my work. My commitment to creating elegant solutions extends to my love for
      problem-solving. Let's connect and embark on a journey to craft exceptional digital
      experiences together.
    </p>
    <a href="#/about" id="about-me-link">
      More About me <div id="about-me-link-icon"></div>
    </a>
  </article>
  <h1 class="subtleBackgroundTitle">CW.</h1>
</main>

<style lang="scss" scoped>
  @use "src/styles/_variables.sass";
  @use "src/styles/_colors.sass";

  main {
    article {
      text-align: justify;
      width: 725px;
      @media (max-width: variables.$breakpoint-lg) {
        width: 100%;
      }
      @media (max-width: variables.$breakpoint-md) {
        width: 100%;
      }
      @media (max-width: variables.$breakpoint-sm) {
        width: 100%;
        padding: 8px;
      }
      #title-name {
        margin-bottom: 32px;
        font-size: 4rem;
        word-break: normal;
        text-align: left;
        @media (max-width: variables.$breakpoint-md) {
          font-size: 3rem;
        }
        &-colored {
          font-family: Poppins-SemiBold;
          color: colors.$text-color;
        }
      }
      #about-me-link {
        display: flex;
        flex-direction: row;
        width: fit-content !important;
        align-items: center;
        &:hover #about-me-link-icon {
          transition: all 250ms ease;
          transform: translateX(4px);
        }
        &-icon {
          transition: all 250ms ease;
          width: 20px;
          height: 20px;
          background: url("src/assets/images/chevron-right.svg") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
</style>
