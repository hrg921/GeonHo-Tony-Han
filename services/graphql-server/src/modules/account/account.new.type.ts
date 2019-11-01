import { Field, InputType } from 'type-graphql';

import { NewValue } from '../value/value.new.type';

@InputType()
export class NewAccount {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  currentBalance: NewValue;
}
