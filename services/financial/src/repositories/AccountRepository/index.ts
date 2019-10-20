import { AccountEntity } from 'entities/AccountEntity';
import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';

@Service()
@EntityRepository(AccountEntity)
export class AccountRepository extends Repository<AccountEntity> {}
