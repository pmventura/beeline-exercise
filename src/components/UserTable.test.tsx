import { render, screen, fireEvent } from '@testing-library/react';
import UserTable from './UserTable';

describe('UserTable', () => {
  const users = [
    {
      id: 1,
      name: 'Michael Jordan',
      username: 'michaeljordan',
      email: 'michael@example.com',
    },
    {
      id: 2,
      name: 'Kobe Bryant',
      username: 'kobebryant',
      email: 'kobe@example.com',
    },
  ];

  it('renders user rows', () => {
    render(<UserTable users={users} onRemove={jest.fn()} />);
    expect(screen.getByText('Michael Jordan')).toBeInTheDocument();
    expect(screen.getByText('Kobe Bryant')).toBeInTheDocument();
    expect(screen.getByText('michaeljordan')).toBeInTheDocument();
    expect(screen.getByText('kobebryant')).toBeInTheDocument();
    expect(screen.getByText('michael@example.com')).toBeInTheDocument();
    expect(screen.getByText('kobe@example.com')).toBeInTheDocument();
  });

  it('calls onRemove when Delete is clicked', () => {
    const onRemove = jest.fn();
    render(<UserTable users={users} onRemove={onRemove} />);
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]);
    expect(onRemove).toHaveBeenCalledWith(1);
  });
});
