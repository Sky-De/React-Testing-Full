import { render, screen } from '@testing-library/react'
import { Counter } from '../counter/Counter'
import user from '@testing-library/user-event'

describe.skip('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
    const amountInput = screen.getByRole('spinbutton')
    expect(amountInput).toBeInTheDocument()
    const setButton = screen.getByRole('button', { name: 'Set' })
    expect(setButton).toBeInTheDocument()
  })
})
