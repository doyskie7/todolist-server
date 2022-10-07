import { Start } from "./src/routes";
require('dotenv').config()
Start(process.env.port);