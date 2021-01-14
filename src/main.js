import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Antonio",
    lastName: "Hernández"
  }
});

export default app;
