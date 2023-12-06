<main class="w-100 h-100 container d-flex align-items-center justify-content-start flex-column">
  <article>
    <h1 id="title">About Me</h1>
    <p>
      Greetings! I'm Sajjad, a passionate and self-taught full-stack developer nestled in the
      vibrant tech landscape of Iran. My journey into the world of coding was sparked by a deep
      fascination for constructing solutions from scratch and an unyielding curiosity about how
      technology shapes our digital world.
    </p>
    <ul>
      <li>
        <h4>Tech Enthusiast and Alchemist</h4>
        <p>
          I thrive in the realms of JavaScript and GoLang, sculpting seamless experiences on the
          frontend and architecting robust systems on the backend. Proficient in TypeScript and
          Python, I continually expand my skill set to stay adaptable in the ever-evolving tech
          ecosystem.
        </p>
      </li>
      <li>
        <h4>Full-Stack Artisan</h4>
        <p>
          As a full-stack developer, I've honed my expertise in both frontend and backend realms.
          Navigating through various libraries and frameworks, I transform ideas into pixel-perfect
          interfaces. From vanilla JS to cutting-edge technologies, I relish the challenge of
          bringing designs to vibrant life.
        </p>
      </li>
      <li>
        <h4>Backend Wizardry</h4>
        <p>
          n the backend realm, I wield the power of Golang, seamlessly orchestrating server-side
          functionalities with finesse. My expertise spans both traditional SQL databases and the
          dynamic world of NoSQL databases. Crafting efficient and scalable solutions isn't just a
          job for me; it's a passion.
        </p>
      </li>
      <li>
        <h4>Design Thinker</h4>
        <p>
          Recognizing the pivotal role of user-centric design, I'm well-versed in Figma, ensuring a
          holistic approach to development that seamlessly blends aesthetics with functionality.
        </p>
      </li>
      <li>
        <h4>Lifelong Learning Advocate</h4>
        <p>
          Fueled by an unquenchable thirst for knowledge, I revel in navigating new technologies and
          methodologies. Whether adopting the latest frontend framework or delving into the
          intricacies of a novel programming language, I embrace the continuous learning journey
          that defines the ever-evolving tech landscape.
        </p>
      </li>
      <li>
        <h4>Problem Solver & Avid Reader</h4>
        <p>
          I thrive on challenges, finding joy in dissecting problems and crafting elegant solutions.
          When not immersed in code, you'll likely find me engrossed in a good book, as reading is
          another avenue through which I fuel my passion for growth.
        </p>
      </li>
      <li>
        <h4>Let's Craft the Future Together</h4>
        <p>
          If you share the same enthusiasm for technology and development, let's collaborate! I'm
          always open to exciting opportunities that involve creating impactful and innovative
          solutions. Explore my portfolio to discover projects reflecting my dedication to the art
          of coding.
        </p>
      </li>
    </ul>

    <p>
      Feel free to <a class="link" href="#/contact"> get in touch</a>and let's discuss how we can
      bring your ideas to life.
    </p>
  </article>
  <h1 class="subtle-background-title">About Me.</h1>
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
      @media (max-width: variables.$breakpoint-sm) {
        &:not(.link) {
          text-align: left;
        }
      }
      margin-bottom: 32px;
      #title {
        margin-bottom: 32px;
        font-size: 4rem;
        word-break: normal;
        text-align: left;
        font-family: Poppins-SemiBold;
        @media (max-width: variables.$breakpoint-md) {
          font-size: 3rem;
        }
      }
      ul {
        position: relative !important;
        list-style-type: none;
        padding-left: 16px;
        &::before {
          content: "";
          width: 1px;
          height: 100%;
          background: #808080;
          position: absolute !important;
          bottom: 0px;
          left: 0px;
          margin: auto;
          z-index: 1;
        }
        li {
          margin-block: 32px;
          &::before {
            z-index: 2;
            content: "";
            width: 16px;
            height: 16px;
            background: #000;
            border-radius: 100%;
            position: absolute;
            left: -8px;
            border: 1px solid #808080;
          }
        }
      }

      // #about-me-link {
      //   display: flex;
      //   flex-direction: row;
      //   width: fit-content !important;
      //   align-items: center;
      //   &:hover #about-me-link-icon {
      //     transition: all 250ms ease;
      //     transform: translateX(4px);
      //   }
      //   &-icon {
      //     transition: all 250ms ease;
      //     width: 20px;
      //     height: 20px;
      //     background: url("src/assets/images/chevron-right.svg") no-repeat center;
      //     background-size: contain;
      //   }
      // }
    }
  }
</style>
