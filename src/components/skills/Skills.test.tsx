import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test.skip('renders list', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })

  test.skip('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  })
  
  test.skip('renders a login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button',{ name: "Login"});
    expect(loginButton).toBeInTheDocument();
  })
  
  // query... if finds element will return that otherwise it will return null
  test.skip('Start learnig button is not rendered', () => {
    render(<Skills skills={skills} />);
    const startButton = screen.queryByRole('button',{ name: "Start learning"});
    expect(startButton).not.toBeInTheDocument();
  })
  
  // find... creates promise to resolve after 1000ms by default -- needs async / await
  test.skip('Start learnig button is eventually displayed', async () => {
    render(<Skills skills={skills} />);

    // it should be view with exact spell otherwise throws an error
    // const view =  render(<Skills skills={skills} />);
    // logRoles(view.container)
    
    // screen.debug()
    const startButton = await screen.findByRole('button', { name: "Start learning" }, { timeout: 2000 });
    expect(startButton).toBeInTheDocument();
    // screen.debug()
  })
  
})
