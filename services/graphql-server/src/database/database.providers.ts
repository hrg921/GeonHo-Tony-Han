import { Provider } from '@nestjs/common';
import * as path from 'path';
import { createConnection } from 'typeorm';

import { ConfigService } from '../config/config.service';

export const DATABASE_CONNECTION_TOKEN = 'DATABASE_CONNECTION';

export const databaseProviders: Provider[] = [
  {
    inject: [ConfigService],
    provide: DATABASE_CONNECTION_TOKEN,
    useFactory: (configService: ConfigService) => {
      console.log(configService);
      console.log(configService.get('DATABASE_USERNAME'));
      const url = `mongodb+srv://${configService.get(
        'DATABASE_USERNAME'
      )}:${configService.get(
        'DATABASE_PASSWORD'
      )}@cluster0-8qydn.mongodb.net/geonho?retryWrites=true&w=majority`;

      return createConnection({
        url,
        type: 'mongodb',
        entities: [path.resolve(__dirname, '../../dist/**/*.entity{.ts,.js}')],
        synchronize: true,
        useUnifiedTopology: true,
      });
    },
  },
];
