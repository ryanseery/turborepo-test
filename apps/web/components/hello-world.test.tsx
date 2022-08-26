import '../__mocks__/matchMedia.mock';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './hello-world';

describe('tests', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('should', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello There!')).toBeInTheDocument();
  });
});
