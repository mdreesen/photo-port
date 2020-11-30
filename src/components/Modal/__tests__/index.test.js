import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModel = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

  describe('Modal component', () => {
it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        // Assert the match
    })
          // snapshot test

});
      /*
      describe('Click Event', () => {
        it('calls onClose handler', () => {
          const { getByText } = render(<Modal
            onClose={mockToggleModel}
            currentPhoto={currentPhoto}
          />);
          fireEvent.click(getByText('Close this modal'));
      
          expect(mockToggleModal).toHaveBeenCalledTimes(1);
        });
      }) 
      */