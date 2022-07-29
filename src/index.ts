import config from '@/config';
import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import db from '@/db';
import ConsoleController from './controller/ConsoleController';
import cors from '@koa/cors';

const app = createKoaServer({
	controllers: [ConsoleController],
});
app.use(cors());
app.listen(config.server.port, () => {
	db();
	console.log(`Server is running on port ${config.server.port}`);
});
