import { render, screen } from '@testing-library/react';
import ModeIcon from './ModeIcon';
import { AppProviders } from '../../context/AppProviders';
import user from '@testing-library/user-event';


describe('ModeToggleComponet', ()=> {

  test('renders correctly', () => {
    render(<ModeIcon />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveClass("bx-moon");
  });

  test('toggles Icon correctly', async () => {
    user.setup();
    render(<ModeIcon />, { wrapper : AppProviders });
    const iconElement = screen.getByRole("img");
    const divBtn = screen.getByRole("button");
    await user.click(divBtn);
    expect(iconElement).toHaveClass("bx-sun");
  });

});