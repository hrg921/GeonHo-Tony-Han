import { Column } from 'typeorm';

import { Currency } from './currency';

export class ValueEntity {
  @Column()
  amount: number;

  @Column()
  currency: Currency;
}
