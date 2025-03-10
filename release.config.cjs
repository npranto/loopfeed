module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { subject: /\[MAJOR\]/i, release: 'major' },
          { subject: /\[MINOR\]/i, release: 'minor' },
          { subject: /\[PATCH\]/i, release: 'patch' },
          { release: 'patch' }, // default: every PR merged bumps patch version
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: '🚀 v${nextRelease.version} [skip ci]',
      },
    ],
  ],
};
