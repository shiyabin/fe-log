import { configure, getLogger } from 'log4js';
configure({
	appenders: { cheese: { type: 'file', filename: '../../logs/cheese.log' }, console: { type: 'file', filename: '../../logs/console.log' } },
	categories: { default: { appenders: ['cheese'], level: 'error' }, console: { appenders: ['console'], level: 'info' } },
});
export const consoleLogger = getLogger('console');
export default getLogger();
