import { render, screen, within } from '@testing-library/react';
import UserInfo from '.';

describe('UserInfo Component', () => {
  it('renders without crashing', async () => {
    render(<UserInfo />);
    expect(screen.getByTestId('user-info')).toBeInTheDocument();
  });

  it('renders with props', async () => {
    const props = {
      name: 'owl',
      avatarURL: 'https://media.giphy.com/media/qISaMW1xwmvNS/giphy.gif'
    };
    render(<UserInfo {...props} />);
    const userInfoEl = screen.getByTestId('user-info');
    expect(userInfoEl).toBeInTheDocument();

    const name = await screen.findByText('owl');
    const img = within(userInfoEl).getByRole('img');
    // const avatarURL = await screen.findByText('0 bytes');
    expect(name).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/qISaMW1xwmvNS/giphy.gif');
  });
});
