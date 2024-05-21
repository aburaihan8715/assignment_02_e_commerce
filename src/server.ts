import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
  try {
    const { ConnectionStates } = await mongoose.connect(
      config.database_url_local as string,
    );

    if (ConnectionStates.connected) {
      console.log('Db is connected');
    }

    app.listen(config.server_port, () => {
      console.log(`App is listening at http://localhost:${config.server_port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
