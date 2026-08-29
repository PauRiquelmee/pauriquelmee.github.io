import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import ProjectPreviewDialog from '.';

const commonProps = {
  projectName: 'Woku',
  websiteUrl: 'https://woku.app',
  imageSrc: '/media/woku-project.webp',
  imageAlt: 'Woku website screenshot.',
  fallbackMessage: 'Woku prevents third-party embedding.',
};

describe('ProjectPreviewDialog', () => {
  it('shows an honest fallback when embedding is blocked', async () => {
    const user = userEvent.setup();
    render(<ProjectPreviewDialog {...commonProps} />);

    await user.click(screen.getByRole('button', { name: 'Live preview Woku' }));
    expect(
      screen.getByRole('dialog', { name: 'Woku live preview' }),
    ).toBeVisible();
    expect(screen.getByText(commonProps.fallbackMessage)).toBeVisible();
    expect(screen.queryByTitle('Woku live website')).toBeNull();
    expect(
      screen.getByRole('link', { name: 'Open website for Woku' }),
    ).toHaveAttribute('target', '_blank');
  });

  it('mounts a lazy iframe only after explicit interaction', async () => {
    const user = userEvent.setup();
    render(
      <ProjectPreviewDialog
        {...commonProps}
        previewUrl="https://example.com/preview"
      />,
    );

    expect(screen.queryByTitle('Woku live website')).toBeNull();
    await user.click(screen.getByRole('button', { name: 'Live preview Woku' }));
    expect(screen.getByTitle('Woku live website')).toHaveAttribute(
      'loading',
      'lazy',
    );
  });

  it('closes with Escape and restores focus to the trigger', async () => {
    const user = userEvent.setup();
    render(<ProjectPreviewDialog {...commonProps} />);

    const trigger = screen.getByRole('button', { name: 'Live preview Woku' });
    await user.click(trigger);
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(trigger).toHaveFocus();
  });
});
