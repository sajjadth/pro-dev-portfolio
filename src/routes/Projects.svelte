<script lang="ts">
  import { fade } from "svelte/transition";

  const projects = [
    {
      title: "Trivia Quest",
      description:
        "Trivia Quest is a full-stack app offering a diverse range of trivia categories, real-time multiplayer challenges, and a responsive design. Test your knowledge, compete globally, and track your progress on leaderboards.",
      technologies: ["JavaScript", "Go", "TypeScript", "Nuxt", "Vue", "Sass"],
      github: "https://github.com/sajjadth/trivia-quest",
      site: "https://sajjadth.github.io/trivia-quest",
    },
    {
      title: "Persian Calendar",
      description:
        "Persian Calendar, the simple and stylish widget that will help you keep track of your days. With this widget, you can see a beautiful and intuitive calendar in your notion pages.",
      technologies: ["JavaScript", "React", "Redux", "Sass"],
      github: "https://github.com/sajjadth/persian-calendar",
      site: "https://sajjadth.github.io/persian-calendar",
    },
    {
      title: "Persian Calendar API",
      description:
        "The Persian Calendar API is a Node.js-based API that provides a Persian (Jalali) calendar with holiday events. Easily retrieve calendars for specific years and months, and access holiday data for cultural inclusivity in your applications. The API is user-friendly, easy to set up, and open for community contributions.",
      technologies: ["JavaScript", "Nodejs"],
      github: "https://github.com/sajjadth/persian-calendar-api",
      site: "https://persian-calendar-api.sajjadth.workers.dev",
    },
    {
      title: "Smell Solutions",
      description:
        "Smell Solutions is a discreet and thoughtful tool designed to address personal hygiene concerns by facilitating the sending of friendly and anonymous emails. This platform ensures that users can communicate sensitive matters in a confidential and non-confrontational manner.",
      technologies: ["JavaScript", "React", "Sass"],
      github: "https://github.com/sajjadth/smell-solutions",
      site: "https://sajjadth.github.io/smell-solutions",
    },
  ];

  function horizontalScroll(e: any) {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
  }
</script>

<main
  in:fade={{ delay: 500 }}
  out:fade|local
  class="w-100 h-100 container d-flex align-items-center justify-content-start flex-column"
>
  <article>
    <h1 id="title">Projects.</h1>
    <div id="projects" class="h-100">
      {#each projects as { title, description, technologies, github, site }}
        <div class="card d-flex flex-column align-items-center justify-content-between">
          <div class="card-title d-flex flex-column align-items-start justify-content-center">
            <h2 class="text-break">{title}</h2>
          </div>
          <div class="card-text">
            <p>{description}</p>
          </div>
          <div
            class="card-interactions d-flex align-items-center justify-content-start"
            on:wheel={(e) => horizontalScroll(e)}
          >
            {#each technologies as name}
              <div class={`chip ${name.toLowerCase()}`}>{name}</div>
            {/each}
          </div>
          <div
            class="card-external-links w-100 d-flex flex-row align-items-center justify-content-end"
          >
            <a class="github not-link" href={github} target="_blank" aria-label="GitHub" />
            <a class="external-link not-link" href={site} target="_blank" aria-label="Site" />
          </div>
        </div>
      {/each}
    </div>
  </article>
  <h1 class="subtle-background-title subtle-background-title-lg">Projects.</h1>
</main>

<style lang="scss" scoped>
  @use "src/styles/_variables.sass";
  @use "src/styles/_colors.sass";

  main {
    article {
      text-align: justify;
      width: 725px;
      min-height: fit-content;
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
      #projects {
        width: fit-content;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media (max-width: variables.$breakpoint-md) {
          grid-template-columns: repeat(1, 1fr);
        }

        gap: 16px;
        justify-content: center;
        align-items: center;
        .card {
          width: 300px;
          min-height: 345px;
          background: red;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 0 0 4px 0 rgb(78, 81, 92, 0.37);
          backdrop-filter: blur(2.5px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 250ms ease;
          padding: 8px 24px;
          &:hover {
            transition: all 250ms ease;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 16px 0 rgb(78, 81, 92, 0.37);
          }
          &-title {
            width: 100%;
            height: 40%;
            border-radius: 12px;
            padding-block: 16px 8px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            text-align: left !important;
            margin: 0;
          }
          &-text {
            width: 100%;
            height: 45%;
            // background: darkslateblue;
            padding-block: 8px;
            border-radius: 12px;
            text-align: left;

            p {
              height: 100%;
              width: 100%;
              margin: 0;

              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
          &-interactions {
            width: 100%;
            height: 15%;
            padding-block: 8px;
            margin-bottom: 8px;
            overflow-y: hidden;
            overflow-x: scroll;
            &::-webkit-scrollbar {
              display: none !important;
            }
            .chip {
              width: fit-content;
              height: fit-content;
              border-radius: 20px;
              padding: 2px 8px;
              font-size: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 8px;
              &:last-child {
                margin-right: 0;
              }
            }
            .react {
              background: rgb(0, 216, 255, 0.25);
            }
            .sass {
              background: rgb(204, 102, 153, 0.25);
            }
            .redux {
              background: rgb(118, 74, 188, 0.25);
            }
            .javascript {
              background: rgb(240, 219, 79, 0.25);
            }
            .nodejs {
              background: rgb(60, 135, 58, 0.25);
            }
            .typescript {
              background: rgb(0, 122, 204, 0.25);
            }
            .vue {
              background: rgb(66, 184, 131, 0.25);
            }
            .nuxt {
              background: rgb(53, 73, 94, 0.25);
            }
            .go {
              background: rgb(1, 125, 157, 0.25);
            }
          }
          &-external-links {
            width: fit-content;
            height: 20px;
            margin-block: 8px;

            .external-link {
              background: url("src/assets/images/external-link.svg") no-repeat center;
              background-size: cover;
              width: 20px;
              height: 20px;
              transition: all 250ms ease;
              cursor: pointer;
              border-radius: 100%;
              margin-left: 8px;
              &:hover {
                transform: scale(1.1);
              }
              &:active {
                transform: scale(0.9);
              }
            }
            .github {
              background: url("src/assets/images/github.svg") no-repeat center;
              background-size: cover;
              width: 20px;
              height: 20px;
              transition: all 250ms ease;
              cursor: pointer;
              border-radius: 100%;
              &:hover {
                transform: scale(1.1);
              }
              &:active {
                transform: scale(0.9);
              }
            }
          }
        }
      }
    }
  }
</style>
