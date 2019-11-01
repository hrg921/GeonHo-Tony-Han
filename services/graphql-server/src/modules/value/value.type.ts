import { Field, ObjectType } from 'type-graphql';

import { Currency } from './currency';

@ObjectType()
export class Value {
  @Field()
  amount: number;

  @Field(type => Currency)
  currency: Currency;
}
