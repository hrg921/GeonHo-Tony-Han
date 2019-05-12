import chalk from 'chalk';
import { publish } from 'gh-pages';

const BLOG_ARTIFACT_LOCATION = './packages/blog/public';
const DEPLOY_REPO = 'https://github.com/hrg921/blog.git';
const BLOG_DEPLOY_COMPLETED_LOG = chalk.green(
  `Blog is deployed at gh-pages, repo: ${DEPLOY_REPO}`
);

publish(
  BLOG_ARTIFACT_LOCATION,
  {
    repo: DEPLOY_REPO,
  },
  error => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.info(BLOG_DEPLOY_COMPLETED_LOG);
  }
);
