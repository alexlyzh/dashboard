import MainLayout from './main-layout';
import { render, screen } from '@testing-library/react';

describe('Component: MainLayout', () => {
  it('should render correctly', () => {
    render(
      <MainLayout heading={'test heading name'} subHeading={'test subheading name'}>
        This is children
      </MainLayout>
    );

    expect(screen.getByText('test heading name')).toBeInTheDocument();
    expect(screen.getByText('test subheading name')).toBeInTheDocument();
    expect(screen.getByText('This is children')).toBeInTheDocument();
    expect(screen.getByLabelText(/page content/i)).toBeInTheDocument();
  });
});
