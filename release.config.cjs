export default {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { release: 'patch' }, // Default: PR merged to `master` bumps patch version
          { subject: /\[PATCH\]/, release: 'patch' },
          { subject: /\[MINOR\]/, release: 'minor' },
          { subject: /\[MAJOR\]/, release: 'major' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          '🚀 Release ${nextRelease.version}\n\n' +
          '🔹 Summary:\n${nextRelease.notes}\n\n' +
          '📌 Changes:\n- Auto-generated release by Semantic Release\n' +
          '- Version bump based on merged PRs\n\n' +
          '🔖 Tag: v${nextRelease.version}\n\n[skip ci]',
      },
    ],
  ],
};
