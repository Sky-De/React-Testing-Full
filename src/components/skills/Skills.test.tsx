import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('renders list', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  })
  
  test('renders a login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button',{ name: "Login"});
    expect(loginButton).toBeInTheDocument();
  })
  
  // query... if finds element will return that otherwise it will be return null
  test('Start learnig button is not rendered', () => {
    render(<Skills skills={skills} />);
    const startButton = screen.queryByRole('button',{ name: "Start learning"});
    expect(startButton).not.toBeInTheDocument();
  })
  
  // find... creates promist to resolve after 1000ms by default -- needs async / await
  test('Start learnig button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    const startButton = await screen.findByRole('button', { name: "Start learning" }, { timeout: 2000 });
    expect(startButton).toBeInTheDocument();
  })
  
})
