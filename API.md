# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### NotifyBucket <a name="cdk-notify-bucket.NotifyBucket"></a>

#### Initializers <a name="cdk-notify-bucket.NotifyBucket.Initializer"></a>

```typescript
import { NotifyBucket } from 'cdk-notify-bucket'

new NotifyBucket(scope: Construct, id: string, props: NotifyBucketProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-notify-bucket.NotifyBucket.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-notify-bucket.NotifyBucket.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-notify-bucket.NotifyBucket.parameter.props"></a>

- *Type:* [`cdk-notify-bucket.NotifyBucketProps`](#cdk-notify-bucket.NotifyBucketProps)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="cdk-notify-bucket.NotifyBucket.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket)

---

##### `topic`<sup>Required</sup> <a name="cdk-notify-bucket.NotifyBucket.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)

---


## Structs <a name="Structs"></a>

### NotifyBucketProps <a name="cdk-notify-bucket.NotifyBucketProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NotifyBucketProps } from 'cdk-notify-bucket'

const notifyBucketProps: NotifyBucketProps = { ... }
```

##### `email`<sup>Required</sup> <a name="cdk-notify-bucket.NotifyBucketProps.property.email"></a>

```typescript
public readonly email: string[];
```

- *Type:* `string`[]

---



