import 'source-map-support/register';

import { APIGatewayProxyHandler } from 'aws-lambda';
import { AccountResolver } from 'resolvers/AccountResolver';
import { Container } from 'typedi';

import { connectDB } from '../db';

export const createAccount: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  await connectDB();
  const data = JSON.parse(event.body);
  const accountResolver = Container.get(AccountResolver);
  const newAccount = await accountResolver.createAccount(data);

  return {
    statusCode: 200,
    body: JSON.stringify(newAccount, null, 2),
  };
};
