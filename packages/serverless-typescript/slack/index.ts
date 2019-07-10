import { IncomingWebhook } from '@slack/webhook';

const trySendMessage = async (message: string) => {
  try {
    const webhook_url =
      'https://hooks.slack.com/services/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';

    const webhook = new IncomingWebhook(webhook_url);
    await webhook.send({
      text: message,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendMessage = async (message: string) => {
  await trySendMessage(message);
};
