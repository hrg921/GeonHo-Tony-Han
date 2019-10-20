import { AccountRepository } from 'repositories/AccountRepository';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { NewAccount } from './input';

@Service()
export class AccountService {
  constructor(
    @InjectRepository() private readonly accountRepository: AccountRepository
  ) {}

  public async createAccount(newAccount: NewAccount) {
    const account = await this.accountRepository.create(newAccount);
    const createdAccount = await this.accountRepository.findOne({
      id: account.id,
    });
    return createdAccount;
  }
}
