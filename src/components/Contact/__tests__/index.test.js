import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('testing the contactForm', () => {
    it('renders', () => {
        render(
            <Contact></Contact>
        )
    });

    it('snapshot test', () => {
        const { asFragment } = render(<Contact></Contact>);
        // toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    })
})