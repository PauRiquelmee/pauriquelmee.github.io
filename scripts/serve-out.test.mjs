import { describe, expect, it } from 'vitest';
import { normalizeOutputPath } from './serve-out.lib.mjs';

describe('static preview path normalization', () => {
  it('maps the GitHub Pages user-site path to the export root', () => {
    expect(normalizeOutputPath('/')).toBe('index.html');
    expect(normalizeOutputPath('/documents/paula-riquelme-resume-en.pdf')).toBe(
      'documents/paula-riquelme-resume-en.pdf',
    );
  });

  it('rejects traversal outside the export directory', () => {
    expect(() => normalizeOutputPath('/../../AGENTS.md')).toThrow(
      'Invalid output path',
    );
  });
});
