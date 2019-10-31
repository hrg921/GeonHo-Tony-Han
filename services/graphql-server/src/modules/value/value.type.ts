import { Field, ObjectType, registerEnumType } from 'type-graphql';

export enum Currency {
  KRW = 'KRW',
}

registerEnumType(Currency, { name: 'Currency' });

@ObjectType()
export class Value {
  @Field()
  amount: number;

  @Field(type => Currency)
  currency: Currency;
}
