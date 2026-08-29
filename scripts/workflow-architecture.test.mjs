import { readFile, stat } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';

const workflowPath = '.github/workflows/pages.yml';

describe('GitHub Pages workflow architecture', () => {
  it('gates deployment behind the complete quality job', async () => {
    const workflow = await readFile(workflowPath, 'utf8');

    expect(workflow).toContain('pull_request:');
    expect(workflow).toContain('name: Quality gate');
    for (const command of [
      'npm run validate:architecture',
      'npm run validate:agent-docs',
      'npm run format:check',
      'npm run lint',
      'npm run typecheck',
      'npm run coverage',
      'npm run build',
      'npm run test:e2e',
      'npm run lighthouse',
    ]) {
      expect(workflow).toContain(command);
    }
    expect(workflow).toContain('needs: quality');
    expect(workflow).toContain('actions/upload-pages-artifact@v4');
    expect(workflow).toContain('actions/deploy-pages@v4');
    expect(workflow).toContain('name: github-pages');
  });

  it('has a single workflow that can deploy Pages', async () => {
    await expect(stat('.github/workflows/ci.yml')).rejects.toThrow();
  });
});
