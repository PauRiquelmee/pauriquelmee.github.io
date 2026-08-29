import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { projects } from '@/content/portfolio';
import CaseStudyPage from '.';

describe('CaseStudyPage', () => {
  it('renders canonical evidence and separates internal from external actions', () => {
    render(<CaseStudyPage project={projects[0]} />);

    expect(screen.getByRole('main')).toHaveAccessibleName('Woku');
    expect(screen.getByText('50+')).toBeVisible();
    expect(screen.getByAltText(/Woku website showing/i)).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Visit Woku website' }),
    ).toHaveAttribute('target', '_blank');
    expect(
      screen.getByRole('link', { name: 'Return to selected work' }),
    ).not.toHaveAttribute('target');
    expect(screen.getByText(/documented contributions/i)).toBeVisible();
  });

  it('matches the desktop metric grid to the available evidence', () => {
    const { container } = render(<CaseStudyPage project={projects[1]} />);

    expect(container.querySelector('.case-study-metrics')).toHaveClass(
      'lg:grid-cols-2',
    );
  });

  it('states the project description once in the overview', () => {
    render(<CaseStudyPage project={projects[0]} />);

    expect(
      screen.getAllByText((_, element) =>
        Boolean(
          element?.tagName === 'P' &&
          element.textContent?.startsWith(projects[0].description),
        ),
      ),
    ).toHaveLength(1);
  });
});
