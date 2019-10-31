import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

import { ValueEntity } from '../value/value.entity';

@Entity('accounts')
export class AccountEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column(type => ValueEntity)
  currentBalance: ValueEntity;
}

export type NewAccountEntity = Partial<Omit<AccountEntity, 'id'>>;
