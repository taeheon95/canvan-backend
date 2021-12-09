import { Connection, Repository } from 'typeorm';
import { List } from './List.entity';

export const listProviders = [
  {
    provide: 'LIST_REPOSITORY',
    useFactory: async (connection: Connection) =>
      await connection.getRepository(List),
    inject: ['DATABASE_CONNECTION'],
  },
];
