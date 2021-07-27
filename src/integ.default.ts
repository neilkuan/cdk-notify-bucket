import * as cdk from '@aws-cdk/core';
import { NotifyBucket } from './index';
const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const stack = new cdk.Stack(app, 'demo-stack', { env });
new NotifyBucket(stack, 'mynb', {
  email: [stack.node.tryGetContext('email')],
});
app.synth();