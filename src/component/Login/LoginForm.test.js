// myForm.test.js
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LoginForm from './index.js'

test('rendering and submitting a login form', async () => {
  const handleSubmit = jest.fn()
  render(<LoginForm handleSubmit={handleSubmit} />)

  userEvent.type(screen.getByPlaceholderText('firstname'), 'vishal')
  expect(screen.getByPlaceholderText('firstname')).toHaveValue('vishal')

  userEvent.type(screen.getByPlaceholderText('lastname'), 'katkar')
  expect(screen.getByPlaceholderText('lastname')).toHaveValue('katkar')

  userEvent.type(screen.getByPlaceholderText('email'), 'vishal@gmail.com')
  expect(screen.getByPlaceholderText('email')).toHaveValue('vishal@gmail.com')

  userEvent.type(screen.getByPlaceholderText('password'), 'vishal@123')
  expect(screen.getByPlaceholderText('password')).toHaveValue('vishal@123')

  userEvent.click(screen.getByRole('button', { name: /submit/i }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: 'vishal',
      lastName: 'katkar',
      email: 'vishal@gmail.com',
      password: 'vishal@123'
    }, expect.anything())
  )
})