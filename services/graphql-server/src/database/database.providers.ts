import { Provider } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { createConnection } from 'typeorm';


export const databaseProviders: Provider[] = [
  {
    inject: [ConfigService],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) =>
      await createConnection({
        type: 'mongodb',
        url: `mongodb+srv://${configService.get(
          'DATABASE_USERNAME'
        )}:${configService.get(
          'DATABASE_PASSWORD'
        )}@cluster0-8qydn.mongodb.net/test?retryWrites=true&w=majority`,
        entities: [__dirname + './**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
