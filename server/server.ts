import http from "http";
import app from "./app";

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
