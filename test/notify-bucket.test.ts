import '@aws-cdk/assert/jest';
import * as cdk from 'aws-cdk-lib';
import { NotifyBucket } from '../src/index';

test('one email testing', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'testing-stack');
  new NotifyBucket(stack, 'testing', {
    email: ['mock@mail.com'],
  });
  expect(stack).toHaveResource('AWS::SNS::Subscription', {
    Protocol: 'email',
    TopicArn: {
      Ref: 'testingNotifyTopic4B578EEA',
    },
    Endpoint: 'mock@mail.com',
  });
  expect(stack).not.toHaveResource('AWS::SNS::Subscription', {
    Protocol: 'email',
    TopicArn: {
      Ref: 'testingNotifyTopic4B578EEA',
    },
    Endpoint: 'mock2@mail.com',
  });
});

test('two email testing', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'testing-stack');
  new NotifyBucket(stack, 'testing', {
    email: ['mock@mail.com', 'mock2@mail.com'],
  });
  expect(stack).toHaveResource('AWS::SNS::Subscription', {
    Protocol: 'email',
    TopicArn: {
      Ref: 'testingNotifyTopic4B578EEA',
    },
    Endpoint: 'mock@mail.com',
  });
  expect(stack).toHaveResource('AWS::SNS::Subscription', {
    Protocol: 'email',
    TopicArn: {
      Ref: 'testingNotifyTopic4B578EEA',
    },
    Endpoint: 'mock2@mail.com',
  });
});