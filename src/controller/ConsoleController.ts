import { Controller, Get, QueryParam } from 'routing-controllers';
import ConsoleService from '@/services/ConsoleService';
import ConsoleModel from '@/models/ConsoleModel';
@Controller()
export default class ConsoleController {
	@Get('/')
	public index(@QueryParam('idStr') idStr: string): string {
		console.log(idStr);
		return 'hello world';
	}
	@Get('/findAll')
	public async findAll(): Promise<ConsoleModel[]> {
		return await ConsoleService.findAll();
	}
}
