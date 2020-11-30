import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// to handle props for Nav, we added the categories array, as well as the following mock functions
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactedSelected={mockContactSelected}
          SetContactSelected={mockSetContactSelected}
        />);
      })
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactedSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
          />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
            // this is finding it by the Nav
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactedSelected={mockContactSelected}
            SetContactSelected={mockSetContactSelected}
          />);
        // Assert
            // this finds the emoji by the aria-label text of 'camera'
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactedSelected={mockContactSelected}
        SetContactSelected={mockSetContactSelected}
      />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })