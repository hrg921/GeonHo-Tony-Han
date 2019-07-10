import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { sendMessage } from './slack';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  await sendMessage('개인 노션, 팀 노션 확인하기 & 명상하기');

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
