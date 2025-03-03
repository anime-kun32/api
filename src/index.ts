import { Elysia } from "elysia";
import { setupMiddleware } from "./middlewares";
import { setupRoutes } from "./routes";
import { env } from "./utils/env";

const app = new Elysia();

// Setup middleware and routes
setupMiddleware(app);
setupRoutes(app);

// Check if running in development or production
if (process.env.NODE_ENV === "development") {
    app.listen(env.PORT);

    console.log(
        `API is running at http://${app.server?.hostname}:${app.server?.port}\n` +
        `API Docs : http://${app.server?.hostname}:${app.server?.port}/swagger`
    );
} else {
    // In production (Vercel), export a handler instead of starting the server
    export const handler = app.handle;
}
