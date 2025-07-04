import { createServer } from "http";
import { handler } from "serve-handler";

const port = process.env.PORT || 3000;

createServer((req, res) => {
  return handler(req, res, {
    public: "dist"
  });
}).listen(port, () => {
  console.log(`⚡ Running at http://localhost:${port}`);
});
