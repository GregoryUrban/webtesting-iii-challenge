// Test away!
// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open


import React from 'react';
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'; // after installing this, import
import '@testing-library/react/cleanup-after-each'; // keeps the test from adding a new app everytime - cleans up the tests

import Controls from './Controls';


describe('<Controls />', () => {
    xit('matches snapshot', () => { // identifies if anything changes after component is finished
        const tree = renderer.create(<Controls />)
    
        expect(tree.toJSON()).toMatchSnapshot()
      })

     xit('matches snapshot with message', () => { // identifies if anything changes after component is finished
        const tree = renderer.create(<Controls message={'hello'}/>)
    
        expect(tree.toJSON()).toMatchSnapshot()
      })

     xit('should display message', () => { 
        const message = 'hello'

        const { getByText } = render(<Controls message={message}/>)
    
        getByText(message)
      })

      it('should call closed on button click', () => {
          const locked = jest.fn(); //creates mock function

          const { getByText } = render(<Controls locked={locked}/>)

          const button = getByText(/speak/i)

          fireEvent.click(button);
        //   fireEvent.click(button);

          expect(speak).toHaveBeenCalled();
          expect(speak).toHaveBeenCalledTimes(1);
      })

})