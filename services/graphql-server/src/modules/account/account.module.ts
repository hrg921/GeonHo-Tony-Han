import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { accountProviders } from './account.providers';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [DatabaseModule],
  providers: [...accountProviders, AccountService, AccountResolver],
})
export class AccountModule {}
