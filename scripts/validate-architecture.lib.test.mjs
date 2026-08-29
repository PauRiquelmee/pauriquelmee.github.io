import { describe, expect, it } from 'vitest';
import { inspectTsxSource } from './validate-architecture.lib.mjs';

describe('inspectTsxSource', () => {
  it('allows idiomatic JSX in array callbacks inside one component', () => {
    const errors = inspectTsxSource({
      file: '/project/src/example.tsx',
      root: '/project',
      source: `
        const Example = ({ items }) => (
          <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
        );
        export default Example;
      `,
    });

    expect(errors).toEqual([]);
  });

  it('rejects a second named React component in the same file', () => {
    const errors = inspectTsxSource({
      file: '/project/src/example.tsx',
      root: '/project',
      source: `
        const Item = () => <li>Item</li>;
        const Example = () => <ul><Item /></ul>;
        export default Example;
      `,
    });

    expect(errors).toContain(
      'src/example.tsx must contain exactly one React component; found 2.',
    );
  });

  it('keeps Base UI ownership in foundations and interaction patterns', () => {
    const errors = inspectTsxSource({
      file: '/project/src/components/sections/example/example.tsx',
      root: '/project',
      source: `
        import { Dialog } from '@base-ui/react/dialog';
        const Example = () => <Dialog.Root />;
        export default Example;
      `,
    });

    expect(errors).toContain(
      'src/components/sections/example/example.tsx may not import Base UI directly.',
    );
  });
});
