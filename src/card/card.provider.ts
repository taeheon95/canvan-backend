import { Connection, Repository } from 'typeorm';
import { Card } from './card.entity';

export const cardProviders = [
  {
    provide: 'CARD_REPOSITORY',
    useFactory: async (connection: Connection) =>
      await connection.getRepository(Card),
    inject: ['DATABASE_CONNECTION'],
  },
];
