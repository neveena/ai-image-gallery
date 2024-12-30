import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () => {
  it('renders the input, button, and title', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter a prompt')).toBeInTheDocument();
    expect(screen.getByText('Generate Images')).toBeInTheDocument();
    expect(screen.getByText('AI Image Gallery')).toBeInTheDocument();
  });

  it('displays an error if the prompt is empty', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Generate Images'));
    expect(screen.queryByText('Please enter a prompt')).toBeTruthy();
  });

  it('generates images when a valid prompt is entered', async () => {
    const mockImages = [
      { url: 'http://example.com/image1.png' },
      { url: 'http://example.com/image2.png' },
      { url: 'http://example.com/image3.png' },
    ];
    mockedAxios.post.mockResolvedValueOnce({ data: { data: mockImages } });

    render(<App />);
    const input = screen.getByPlaceholderText('Enter a prompt');
    fireEvent.change(input, { target: { value: 'A beautiful landscape' } });

    fireEvent.click(screen.getByText('Generate Images'));
    expect(await screen.findByAltText('Generated 0')).toBeInTheDocument();
    expect(await screen.findByAltText('Generated 1')).toBeInTheDocument();
    expect(await screen.findByAltText('Generated 2')).toBeInTheDocument();
  });
});
