<script lang="ts">
  import { fade } from "svelte/transition";

  let loading = false;
  let done = false;
  let email = "";
  let name = "";
  let message = "";

  function sendMessage() {
    loading = true;
    fetch(
      `https://pro-dev-portfolio.sajjadth.workers.dev/?name=${name}&email=${email}&message=${message}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          done = true;
          console.log("done");
        } else {
          console.log("not done");
        }
      })
      .catch((err) => console.log("Error:", err))
      .finally(() => (loading = false));
  }
</script>

<main
  in:fade={{ delay: 500 }}
  out:fade|local
  class="w-100 h-100 container d-flex align-items-center justify-content-start flex-column"
>
  <article>
    <h1 id="title">Contact.</h1>
    <p class="text-break">
      Get in touch or shoot me an email directly on
      <a href="mailto:sajjaadth@pm.me" class="link"> sajjaadth@pm.me </a>
    </p>
    <form
      on:submit|preventDefault={sendMessage}
      class="d-flex flex-column align-items-start justifu-content center"
    >
      <input
        disabled={loading || done}
        type="text"
        bind:value={name}
        name="name"
        placeholder="Name"
        required
      />
      <input
        disabled={loading || done}
        type="email"
        bind:value={email}
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        disabled={loading || done}
        bind:value={message}
        name="message"
        placeholder="Message"
        cols="1"
        rows="10"
        maxlength="512"
        required
      />
      <button disabled={loading || done} type="submit">
        {#if done}
          Done
        {:else if loading}
          <svg
            class="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="path"
              fill="none"
              stroke-width="6"
              stroke-linecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        {:else}
          Send Message
        {/if}
      </button>
    </form>
  </article>
  <h1 class="subtle-background-title subtle-background-title-lg">Contact.</h1>
</main>

<style lang="scss" scoped>
  @use "src/styles/_variables.sass";
  @use "src/styles/_colors.sass";

  p {
    text-wrap: balance;
  }
  $offset: 187;
  $duration: 1.4s;

  .spinner {
    animation: rotator $duration linear infinite;
    width: 20px;
    height: 20px;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  .path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    stroke: #000;
    animation: dash $duration ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: $offset;
    }
    50% {
      stroke-dashoffset: calc($offset / 4);
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset;
      transform: rotate(450deg);
    }
  }

  main {
    article {
      text-align: justify;
      width: 725px;
      @media (max-width: variables.$breakpoint-lg) {
        width: 100%;
        text-align: left;
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
      form {
        width: 500px;
        @media (max-width: variables.$breakpoint-lg) {
          width: 100%;
        }
        button {
          width: 160px;
          background: colors.$primary-color;
          border: none;
          color: colors.$background-color;
          border-radius: 8px;
          padding: 10px 20px;
          margin-block: 8px;
          transition: all 250ms ease;
          position: relative;
          &:hover {
            &:not(:disabled) {
              background-color: #a2d837;
              transition: all 250ms ease;
            }
          }
          &:active {
            &:not(:disabled) {
              transform: scale(0.95);
              transition: all 250ms ease;
            }
          }
          &:disabled {
            cursor: not-allowed;
            background: #d3d3d3;
          }
        }
        input,
        textarea {
          width: 100%;
          background: transparent;
          padding: 10px 20px;
          margin-block: 8px;
          border: 1px solid colors.$secondary-color;
          border-radius: 8px;
          transition: all 250ms ease;
          &:hover {
            &:not(:disabled) {
              border-color: colors.$text-color;
            }
          }
          &:focus {
            &:not(:disabled) {
              outline: none;
              border-color: colors.$text-color;
              background: #0000009a;
            }
          }
        }
        textarea {
          min-height: 100px;
          height: 200px;
          max-height: 300px;
        }
      }
    }
  }
</style>
