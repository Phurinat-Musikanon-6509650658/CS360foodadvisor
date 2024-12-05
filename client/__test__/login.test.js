import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from '../pages/Login/index'
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

    it('should login successfully and redirect to /profile', async () => {
        // Mock API response
        fetch.mockResponseOnce(JSON.stringify({ jwt: 'fake-jwt-token' }));

        render(<Login />);
        
        // Input identifier and password
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit the form
        fireEvent.click(screen.getByText('Login'));

        // Wait for redirection
        await waitFor(() => expect(push).toHaveBeenCalledWith('/profile'));
        expect(localStorage.getItem('token')).toBe('fake-jwt-token');
    });

    it('should display error message on login failure', async () => {
        fetch.mockResponseOnce(JSON.stringify({ error: { message: 'Invalid credentials' } }), { status: 400 });

        render(<Login />);

        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'wronguser@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getByText('Login'));

        await waitFor(() => screen.getByText('Invalid credentials'));
    });
})