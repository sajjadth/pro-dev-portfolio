<script lang="ts">
  import { fade } from "svelte/transition";

  let email = "";
  let name = "";
  let message = "";
  function sendMessage() {
    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);
  }
</script>

<main
in:fade={{delay:500}}
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
      on:submit|preventDefault|once={sendMessage}
      class="d-flex flex-column align-items-start justifu-content center"
    >
      <input type="text" bind:value={name} name="name" placeholder="Name" required />
      <input type="email" bind:value={email} name="email" placeholder="Email" required />
      <textarea
        bind:value={message}
        name="message"
        placeholder="Message"
        cols="1"
        rows="10"
        maxlength="128"
        required
      />
      <button type="submit">Send Message</button>
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
          background: colors.$primary-color;
          border: none;
          color: colors.$background-color;
          border-radius: 8px;
          padding: 10px 20px;
          margin-block: 8px;
          transition: all 250ms ease;
          &:hover {
            background-color: #a2d837;
            transition: all 250ms ease;
          }
          &:active {
            transform: scale(0.95);
            transition: all 250ms ease;
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
            border-color: colors.$text-color;
          }
          &:focus {
            outline: none;
            border-color: colors.$text-color;
            background: #0000009a;
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
