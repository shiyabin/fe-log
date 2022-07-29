import { Sequelize } from 'sequelize-typescript';
import config from '@/config';
import path from 'path';

const sequelize = new Sequelize(config.db.database as string, config.db.user as string, config.db.password, {
	host: config.db.host,
	dialect: 'mysql',
	models: [path.join(__dirname, '../models')],
});

export default async function () {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.log('Unable to connect to the database:', error);
	}
}
