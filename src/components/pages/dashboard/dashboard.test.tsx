import DashboardPage from './dashboard-page';
import { render, screen } from '@testing-library/react';

describe('Component: DashboardPage', () => {
  it('should render correctly', () => {
    render(
      <DashboardPage />
    );

    expect(screen.getByLabelText(/dashboard/i)).toBeInTheDocument();
  });
});
