import React from 'react';
// the render function will do just what its name implies, render the component
// Jest creates a simulated DOM in a Node.js env to approximate the DOM (no component is actually visibly rendered)
// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collision between test that could corrupt test results
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from '..';


// calling the cleanup function
// this ensures that after each test, we wont have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About></About>)
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        // using "asFragment" which returns a snapshot of the About components
        const { asFragment } = render(<About></About>);
        // toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    })
})