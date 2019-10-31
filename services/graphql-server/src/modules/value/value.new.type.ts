import { Field, InputType } from 'type-graphql';

import { Currency } from './currency';

@InputType()
export class NewValue {
  @Field()
  amount: number;

  @Field(type => Currency)
  currency: Currency;
}
