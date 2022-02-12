import SortForm from './sort-form';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Component: SortForm', () => {
  it('should not be rendered when isVisible = false', () => {
    render(
      <SortForm
        isVisible={false}
        sort={''}
        onSortNameClick={jest.fn}
        onSortTypeClick={jest.fn}
        onSortStatusClick={jest.fn}
        onSortSiteClick={jest.fn}
      />);

      expect(screen.queryByLabelText(/sort form/i)).not.toBeInTheDocument();
  });

  it('should render correctly', () => {
    render(
      <SortForm
        isVisible={true}
        sort={''}
        onSortNameClick={jest.fn}
        onSortTypeClick={jest.fn}
        onSortStatusClick={jest.fn}
        onSortSiteClick={jest.fn}
      />);

    expect(screen.getByLabelText(/sort form/i)).toBeInTheDocument();
  });

  it('should call corresponding handlers on sort buttons click', () => {
    const onSortNameClick = jest.fn();
    const onSortTypeClick = jest.fn();
    const onSortStatusClick = jest.fn();
    const onSortSiteClick = jest.fn();
    render(
      <SortForm
        isVisible={true}
        sort={''}
        onSortNameClick={onSortNameClick}
        onSortTypeClick={onSortTypeClick}
        onSortStatusClick={onSortStatusClick}
        onSortSiteClick={onSortSiteClick}
      />);

    userEvent.click(screen.getByRole('button', { name: /name/i}));
    expect(onSortNameClick).toBeCalled();

    userEvent.click(screen.getByRole('button', { name: /type/i}));
    expect(onSortTypeClick).toBeCalled();

    userEvent.click(screen.getByRole('button', { name: /status/i}));
    expect(onSortStatusClick).toBeCalled();

    userEvent.click(screen.getByRole('button', { name: /site/i}));
    expect(onSortSiteClick).toBeCalled();
  });
});
