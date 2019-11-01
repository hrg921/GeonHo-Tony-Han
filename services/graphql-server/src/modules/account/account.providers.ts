import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm';

import { DATABASE_CONNECTION_TOKEN } from '../../database/database.providers';
import { AccountEntity } from './account.entity';

export const ACCOUNT_REPOSITORY_TOKEN = 'ACCOUNT_REPOSITORY';

export const accountProviders: Provider[] = [
  {
    provide: ACCOUNT_REPOSITORY_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getMongoRepository(AccountEntity),
    inject: [DATABASE_CONNECTION_TOKEN],
  },
];
