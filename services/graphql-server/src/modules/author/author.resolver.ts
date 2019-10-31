import { Query, Resolver } from '@nestjs/graphql';

import { Author } from './author.type';

@Resolver(of => Author)
export class AuthorResolver {
  @Query(returns => Author)
  public author(): Author {
    return {
      id: 1,
      firstName: 'GeonHo',
      lastName: 'Han',
    };
  }
}
