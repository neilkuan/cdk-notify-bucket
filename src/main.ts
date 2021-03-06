import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

export interface NotifyBucketProps {
  readonly email: string[];
}

export class NotifyBucket extends Construct {
  readonly bucket: s3.Bucket;
  readonly topic: sns.Topic;
  constructor(scope: Construct, id: string, props: NotifyBucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'BucketResource', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    this.topic = new sns.Topic(this, 'NotifyTopic');
    const topic = this.topic;
    props.email.forEach( (email, index) => {
      new sns.Subscription(this, `addSubscription${index}`, {
        topic,
        protocol: sns.SubscriptionProtocol.EMAIL,
        endpoint: email,
      });
    });

    this.bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.SnsDestination(topic));

  }
}