import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
	// Database Type
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '0725',
	database: 'board-app',
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: true,
};
