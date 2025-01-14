import app from "./src/app.js";

const server = Bun.serve({
  port: 3000,
  fetch: app.fetch,
});
