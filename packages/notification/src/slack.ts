import { IncomingWebhook } from '@slack/webhook';

const webhook_url =
  'https://hooks.slack.com/services/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';

const webhook = new IncomingWebhook(webhook_url);

(async () => {
  await webhook.send({
    text: "I've got news for you...",
  });
})();
