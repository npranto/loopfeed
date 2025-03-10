module.exports = {
  branches: ['master', 'feat/39-auto-bump-package-version'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
};
