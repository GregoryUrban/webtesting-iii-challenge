// Test away

// ### Dashboard

// - shows the controls and display

import React from 'react';
import * as rtl from '@testing-library/react';
import renderer from 'react-test-renderer'

import 'jest-dom/extend-expect';
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

it('shows the controls and display', () => {
  const wrapper = rtl.render(<Dashboard />);
});

rtl.cleanup();

// Snapshots
describe('<Dashboard />', () => {
  
  it('runs tests', () => {
    expect(true).toBe(true)
  })

  it('matches snapshot', () => { // identifies if anything changes after component is finished
    const tree = renderer.create(<Dashboard flag={'yes'} />); // generates a dom tree
    
    expect(tree.toJSON()).toMatchSnapshot() //snapshots are a JSON representative of the DOM tree
  })

})
