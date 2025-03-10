import { describe, it, expect } from '@jest/globals';
import { getPackageJson } from '../../utils/getPackageJson.js';

describe('getPackageJson', () => {
  it('should return the package.json file', () => {
    const packageJson = getPackageJson();
    expect(packageJson).toBeDefined();
  });
});
