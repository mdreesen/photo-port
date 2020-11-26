import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav></Nav>);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav></Nav>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
            // this is finding it by the Nav
        const { getByLabelText } = render(<Nav></Nav>)
        // Assert
            // this finds the emoji by the aria-label text of 'camera'
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })