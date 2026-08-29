import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { skillGroups } from '@/content/portfolio';
import SkillGroup from '.';

describe('SkillGroup', () => {
  it('renders a named semantic list', () => {
    render(<SkillGroup group={skillGroups[0]} />);

    expect(screen.getByRole('heading', { name: 'Product' })).toBeVisible();
    expect(screen.getAllByRole('listitem')).toHaveLength(8);
    expect(screen.getByText('Customer research')).toBeVisible();
  });
});
