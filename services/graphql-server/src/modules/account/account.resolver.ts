import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ID } from 'type-graphql';

import { NewAccount } from './account.new.type';
import { AccountService } from './account.service';
import { Account } from './account.type';

@Resolver(of => Account)
export class AccountResolver {
  constructor(
    @Inject(AccountService) private readonly accountService: AccountService
  ) {}

  @Query(returns => Account)
  accountById(@Args({ name: 'id', type: () => ID }) id: string) {
    return this.accountService.findById(id);
  }

  @Mutation(returns => Account)
  addAccount(
    @Args({ name: 'newAccount', type: () => NewAccount }) newAccount: NewAccount
  ) {
    return this.accountService.create(newAccount);
  }
}
