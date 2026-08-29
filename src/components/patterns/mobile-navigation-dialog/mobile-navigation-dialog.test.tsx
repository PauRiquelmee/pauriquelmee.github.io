import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import MobileNavigationDialog from '.';

describe('MobileNavigationDialog', () => {
  it('renders the modal navigation and reports dismissal', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <MobileNavigationDialog
        onClose={onClose}
        triggerRef={createRef<HTMLElement>()}
      />,
    );

    expect(screen.getByRole('dialog', { name: 'Navigation' })).toBeVisible();
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledOnce();
  });
});
