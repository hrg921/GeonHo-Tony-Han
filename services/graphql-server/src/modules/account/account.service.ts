import { Inject, Injectable } from '@nestjs/common';
import { ObjectId } from 'bson';
import { MongoRepository, ObjectID } from 'typeorm';

import { AccountEntity, NewAccountEntity } from './account.entity';
import { ACCOUNT_REPOSITORY_TOKEN } from './account.providers';

@Injectable()
export class AccountService {
  constructor(
    @Inject(ACCOUNT_REPOSITORY_TOKEN)
    private readonly accountRepository: MongoRepository<AccountEntity>
  ) {}

  async create(newAccountEntity: NewAccountEntity) {
    const insertResult = await this.accountRepository.insertOne(
      newAccountEntity
    );
    const [createdAccount] = await this.accountRepository.findByIds([
      insertResult.insertedId,
    ]);
    return createdAccount;
  }

  async findById(id: string | ObjectID) {
    const [account] = await this.accountRepository.findByIds([
      new ObjectId(id),
    ]);
    return account;
  }
}
