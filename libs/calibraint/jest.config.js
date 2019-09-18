module.exports = {
  name: 'calibraint',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/calibraint',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
