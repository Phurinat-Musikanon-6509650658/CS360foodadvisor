import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Register from '../pages/register/index'
import { useRouter } from 'next/router';
import React from 'react';

// Import fetch mock
import fetchMock from 'jest-fetch-mock';

// Enable fetch mock
fetchMock.enableMocks();

jest.mock('react-github-btn', () => {
  return jest.fn(() => <div>Mock GitHub Button</div>);
});

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}))
 
describe('Login and Register TEST', () => {
    let push;

    beforeEach(() => {
        push = jest.fn();
        useRouter.mockReturnValue({ push });
        fetch.resetMocks();
    });

    it('should Register successfully and redirect to login page', async () => {
        fetch.mockResponseOnce(JSON.stringify({ jwt: 'fake-jwt-token' }));

        render(<Register/>);

        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test1' }});
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test1@gmail.com' }});
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test1pass' }});
        fireEvent.change(screen.getByPlaceholderText('Job'), { target: { value: 'Student' }});
        fireEvent.click(screen.getByText('Register'));

        await waitFor(() => expect(push).toHaveBeenCalledWith('/Login'));
    })

    it('should warning if use wrong Email format', async () => {
        fetch.mockResponseOnce(JSON.stringify({ error: { message: 'email must be a valid email' }}), { status: 400 })

        render(<Register/>);

        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test1' }});
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test1' }});
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test1pass' }});
        fireEvent.change(screen.getByPlaceholderText('Job'), { target: { value: 'Student' }});
        fireEvent.click(screen.getByText('Register'));

        await waitFor(() => screen.getByText('email must be a valid email'));
    })
})