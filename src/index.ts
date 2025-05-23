import { Elysia } from "elysia";
import { setupMiddleware } from "./middlewares";
import { setupRoutes } from "./routes";
import { env } from "./utils/env";

const HOST = env.HOST || "0.0.0.0";
const PORT = Number(env.PORT) || 3000;

const app = new Elysia();
setupMiddleware(app);
setupRoutes(app);

app.listen(PORT, HOST);


const displayHost = HOST === "0.0.0.0" ? "localhost" : HOST;

console.log(`API is running at http://${displayHost}:${PORT}`);
console.log(`API Docs : http://${displayHost}:${PORT}/swagger`);
