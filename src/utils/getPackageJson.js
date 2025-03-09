import { readFileSync } from 'fs';
import { join } from 'path';

export function getPackageJson() {
  const packageJsonPath = join(process.cwd(), 'package.json');
  return JSON.parse(readFileSync(packageJsonPath, 'utf8'));
}
