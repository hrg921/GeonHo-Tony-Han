import { AccountService } from 'services/AccountService';
import { NewAccount } from 'services/AccountService/input';
import { Service } from 'typedi';

@Service()
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  public createAccount(newAccount: NewAccount) {
    return this.accountService.createAccount(newAccount);
  }
}
