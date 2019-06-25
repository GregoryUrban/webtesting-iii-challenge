// Test away!
// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states. - line 20
// - buttons' text changes to reflect the state the door will be in if clicked - lines 29, 40
// - the closed toggle button is disabled if the gate is locked. Line 50
// - the locked toggle button is disabled if the gate is open. Line 58


import React from 'react';
import renderer from 'react-test-renderer'
import { render, fireEvent }  from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // keeps the test from adding a new app everytime - cleans up the tests

import Controls from './Controls';


describe('<Controls />', () => {

    it("should provide buttons to toggle the closed and locked states", async () => {
        const buttons = render(<Controls locked={false} closed={false}/>);
        const closebtn = buttons.getByTestId('toggle-closed');
        const lockbtn = buttons.getByTestId('toggle-locked');
        expect(closebtn).toBeDefined();
        expect(lockbtn).toBeDefined();
    })

    it('Unlocked buttons text changes to reflect the state the door will be in if clicked', async () => {
        // const buttons;  const closebtn; const lockbtn;
        const buttons = render(<Controls locked={false} closed={false}/>);
        const closebtn = buttons.getByTestId('toggle-closed');
        const lockbtn = buttons.getByTestId('toggle-locked');
        expect(closebtn.textContent).toBe("Close Gate");
        expect(lockbtn.textContent).toBe("Lock Gate");
        await fireEvent.click(closebtn);
        await fireEvent.click(lockbtn);
    })

    it('Locked buttons text changes to reflect the state the door will be in if clicked', async () => {
        const buttons = render(<Controls locked={true} closed={true}/>);
        const closebtn = buttons.getByTestId('toggle-closed');
        const lockbtn = buttons.getByTestId('toggle-locked');
        expect(closebtn.textContent).toBe("Open Gate");
        expect(lockbtn.textContent).toBe("Unlock Gate");
        await fireEvent.click(closebtn);
        await fireEvent.click(lockbtn);
    })

    it("the closed toggle button is disabled if the gate is locked", async () => {
        const buttons = render(<Controls locked={true} closed={true}/>);
        const button = buttons.getByTestId('toggle-closed');
        await fireEvent.click(button);
        expect(button.disabled).toBe(true);
    })

    it("the locked toggle button is disabled if the gate is open", async () => {
        const buttons = render(<Controls locked={false} closed={false}/>);
        const button = buttons.getByTestId('toggle-locked');
        await fireEvent.click(button);
        expect(button.disabled).toBe(true);
    })
    

})

