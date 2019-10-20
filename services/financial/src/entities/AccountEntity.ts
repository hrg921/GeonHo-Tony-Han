import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

import { Account } from '../models/Account/Account';

interface AccountEntityInterface extends Account {
  id: ObjectID;
  createdAt: Date;
  updatedAt: Date;
  title: string;
}

@Entity('users')
export class AccountEntity implements AccountEntityInterface {
  @ObjectIdColumn()
  id: ObjectID;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  title: string;

  // @Column(_type => Value)
  // currentBalance?: Value;
}

// export class Value {
//   @Column()
//   amount: number;

//   @Column({ default: Currency.KRW, enum: Currency })
//   currency: Currency;
// }
