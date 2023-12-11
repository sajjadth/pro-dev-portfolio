<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  onMount(() => {
    const scrollContainer = document.getElementById("horizontal-chip");

    scrollContainer?.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  });
</script>

<main
  in:fade={{ delay: 500 }}
  out:fade|local
  class="w-100 h-100 container d-flex align-items-center justify-content-start flex-column"
>
  <article>
    <h1 id="title">Projects.</h1>
    <div class="d-flex flex-row align-items-center-justify-centent-start w-100 h-100"></div>
  </article>
  <h1 class="subtle-background-title subtle-background-title-lg">Projects.</h1>
</main>

<style lang="scss" scoped>
  @use "src/styles/_variables.sass";
  @use "src/styles/_colors.sass";

  .external-links {
    width: fit-content;
    height: 20px;
    position: absolute;
    top: 24px;
    right: 24px;
    .external-link {
      background: url("src/assets/images/external-link.svg") no-repeat center;
      background-size: cover;
      width: 20px;
      height: 20px;
      transition: all 250ms ease;
      cursor: pointer;
      border-radius: 100%;
      margin-left: 4px;
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
      .card {
        width: 300px;
        min-height: 300px;
        background: red;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 4px 0 rgb(78, 81, 92, 0.37);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        transition: all 250ms ease;
        padding: 8px 24px;
        &:hover {
          transition: all 250ms ease;
          backdrop-filter: blur(7.5px);
          box-shadow: 0 0 16px 0 rgb(78, 81, 92, 0.37);
        }
        &-title {
          width: 100%;
          height: 40%;
          border-radius: 12px;
          padding-block: 16px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          text-align: left !important;
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
        }
      }
    }
  }
</style>
