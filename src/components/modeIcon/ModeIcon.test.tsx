import { render, screen } from '@testing-library/react';
import { customRender } from '../../test-utils';
import ModeIcon from './ModeIcon';
import user from '@testing-library/user-event';
import { AppProviders } from '../../context/AppProviders';


describe('ModeToggleComponet', ()=> {

  test.skip('renders correctly', () => {
    render(<ModeIcon />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toHaveClass("bx-moon");
  });

  // wraps only one test with providers
  test.skip('toggles Icon correctly', async () => {
    user.setup();
    render(<ModeIcon />, { wrapper: AppProviders});
    const iconElement = screen.getByRole("img");
    const divBtn = screen.getByRole("button");
    await user.click(divBtn);
    expect(iconElement).toHaveClass("bx-sun");
  });
  
  // wraps all tests with providers using custom render function
  test.skip('toggles Icon correctly again', async () => {
    user.setup();
    customRender(<ModeIcon />);
    const iconElement = screen.getByRole("img");
    const divBtn = screen.getByRole("button");
    await user.click(divBtn);
    expect(iconElement).toHaveClass("bx-sun");
  });

});