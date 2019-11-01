import { Field, ID, ObjectType } from 'type-graphql';

import { Value } from '../value/value.type';

@ObjectType()
export class Account {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  currentBalance: Value;
}
