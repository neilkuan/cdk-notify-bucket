const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-notify-bucket',
  repositoryUrl: 'https://github.com/neilkuan/cdk-notify-bucket.git',
  description: 'Create the S3 Bucket, will send event to email when object created',
  keywords: ['aws', 'cdk', 'notify', 'sns', 's3'],
  autoDetectBin: false,
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  catalog: {
    twitter: 'neil_kuan',
    announce: false,
  },
  compat: true,
  publishToPypi: {
    distName: 'cdk-notify-bucket',
    module: 'cdk_notify_bucket',
  },
  stability: 'experimental',
  defaultReleaseBranch: 'main',
  rebuildBot: false,
  bundledDeps: [
    '@aws-cdk/assert',
  ],
  workflowNodeVersion: '^14.17.0',
});
const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage', '.env', '.DS_Store'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'images');
project.synth();