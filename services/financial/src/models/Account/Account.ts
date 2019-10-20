import { ObjectId } from 'bson';

import { Value } from '../Value/Value';

export interface Account {
  id?: string | ObjectId;
  categoryId?: string;
  createdAt?: Date;
  currentBalance?: Value;
  title?: string;
  description?: string;
}
