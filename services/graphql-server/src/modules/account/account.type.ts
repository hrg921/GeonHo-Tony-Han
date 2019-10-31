import { Field, ID, ObjectType } from 'type-graphql';

import { Value } from '../value/value.type';


@ObjectType()
export class Acount {
  @Field(type => ID)
  id: string;

  @Field()
  currentBalance: Value;
}
