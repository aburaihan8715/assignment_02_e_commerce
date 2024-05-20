import app from "./app";
import config from "./config";

app.listen(config.server_port, () => {
  console.log(`App is listening at http://localhost:${config.server_port}`);
});
