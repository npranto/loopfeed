module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { release: 'patch' }, // default: every PR merged bumps patch version
          { subject: /\[PATCH\]/i, release: 'patch' },
          { subject: /\[MINOR\]/i, release: 'minor' },
          { subject: /\[MAJOR\]/i, release: 'major' },
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
        message: '🚀 Release v${nextRelease.version} 🔖 [skip ci]',
      },
    ],
  ],
};
