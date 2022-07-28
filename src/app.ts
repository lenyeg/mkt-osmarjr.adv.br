import { defineApp } from "iles";

export default defineApp({
  head() {
    return {
      link: [{ property: "stylesheet", content: "./assets/base.css" }],
    };
  },
});
