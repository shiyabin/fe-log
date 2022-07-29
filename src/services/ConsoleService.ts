import ConsoleModel from '@/models/ConsoleModel';

export default new (class ConsoleService {
	public findAll(): Promise<ConsoleModel[]> {
		return ConsoleModel.findAll();
	}
})();
