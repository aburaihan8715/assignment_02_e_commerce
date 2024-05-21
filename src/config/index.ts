import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default {
  server_port: process.env.SERVER_PORT,
  database_url_atlas: process.env.DATABASE_URL_ATLAS,
  database_url_local: process.env.DATABASE_URL_LOCAL,
};
