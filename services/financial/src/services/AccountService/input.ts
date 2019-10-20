import { Account } from 'models/Account/Account';

export interface NewAccount extends Account {
  title: string;
}
