import { getByRole, render, screen } from '@testing-library/react';
import { Counter } from '../counter/Counter';
import user from '@testing-library/user-event';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();

    const amountInput = screen.getByRole('spinbutton');
    expect(amountInput).toBeInTheDocument();

    const setButton = screen.getByRole('button', { name: 'Set' });
    expect(setButton).toBeInTheDocument();
  })
  
  test("renders a count of 0", () => {
    render(<Counter/>);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  })


  // Pointer Interacrions----

  // Convenience APIs
  // click--dblClick--tripleClick--hover--unhover
  
  // lowLevel APIs
  // Pointer APIs(MOUSE)
  // pointer({keys: '[MouseLeft]'}) --> clicking on mouse left click
  // pointer({keys: '[MouseLeft][MouseRight]'}) --> clicking on mouse left click followed by mouse right click
  // if keys is only argument to the function cant set as string ==> pointer('[MouseLeft][MouseRight]')
  // pointer('[MouseLeft>]') --> clicking on mouse left click without relasing it(>)
  // pointer('[/MouseLeft>]') --> relasing it mouse left click(/)

  test("renders a count of 1 after clicking increment button", async () => {
    user.setup();
    
    render(<Counter/>);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  })

  test("renders a count of 3 after clicking 3 times increment button", async () => {
    user.setup();
    
    render(<Counter/>);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await user.tripleClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("3");
  })

  test("renders a count of 0 after clicking 2 times decrement button", async () => {
    user.setup();
    
    render(<Counter/>);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await user.dblClick(decrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  })

  test("renders a count of 1 after clicking 2 times increment button and 1 time decrement button", async () => {
    user.setup();
    
    render(<Counter/>);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(decrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  })

})
