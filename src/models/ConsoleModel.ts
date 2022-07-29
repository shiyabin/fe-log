import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
export interface IConsoleModel {
	id: number;
	username: string;
	requestMethod: string;
	requsetUrl: string;
	url: string;
	event: string;
	desc: string;
	errorType: string;
	dateTime: string;
	handleFunc: string;
	handleDdesc: string;
	result: string;
}
@Table({
	tableName: 'console_log',
	timestamps: false, // 不需要sequelize自动添加时间戳
	freezeTableName: true, // 使用原始的表名称，不需要sequelize对表名称做额外处理
})
export default class ConsoleModel extends Model<ConsoleModel> {
	@PrimaryKey
	@AutoIncrement
	@Column
	public declare id: number;
	@Column
	public declare username: string;
	@Column
	public declare requestUrl: string;
	@Column
	public declare url: string;
	@Column
	public declare event: string;
	@Column
	public declare desc: string;
	@Column
	public declare errorType: string;
	@Column
	public declare dateTime: string;
	@Column
	public declare handleFunc: string;
	@Column
	public declare handleDesc: string;
	@Column
	public declare result: string;
}
