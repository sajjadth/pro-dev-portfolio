import "./styles/main.sass";
import App from "./App.svelte";
import 'bootstrap/dist/css/bootstrap.css';

const targetElement = document.getElementById("app");

if (!targetElement) {
  throw new Error("Could not find the target element with id 'app'");
}

const app = new App({
  target: targetElement,
});

export default app;
