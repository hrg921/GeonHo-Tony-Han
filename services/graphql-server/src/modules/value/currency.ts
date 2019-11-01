import { registerEnumType } from 'type-graphql';

export enum Currency {
  KRW = 'KRW',
}

registerEnumType(Currency, { name: 'Currency' });
