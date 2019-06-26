// Test away!

// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

import React from 'react';
import Display from "./Display";
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each'; // keeps the test from adding a new app everytime - cleans up the tests
import renderer from 'react-test-renderer'


afterEach(rtl.cleanup);

it('displays if gate is open and if it is unlocked', () => {
    const { getByText, queryByText } = rtl.render(<Display closed={false} locked={false} />)

    getByText(/open/i);
    expect(queryByText(/open/i)).toBeTruthy();

    getByText(/unlocked/i);
    expect(queryByText(/unlocked/i)).toBeTruthy();

  })

  it('displays if gate is closed and if it is locked', () => {
    const { getByText, queryByText } = rtl.render(<Display closed={true} locked={true}/>)

    getByText(/closed/i);
    expect(queryByText(/closed/i)).toBeTruthy();

    getByText(/locked/i);
    expect(queryByText(/locked/i)).toBeTruthy();
  })

it("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    let wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.container.childNodes[0].childNodes[1].textContent).toBe("Closed");
    rtl.cleanup();
    wrapper = rtl.render(<Display closed={false} locked={false} />);
    expect(wrapper.container.childNodes[0].childNodes[1].textContent).toBe("Open");
})

it("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    let wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.container.childNodes[0].childNodes[0].textContent).toBe("Locked");
    rtl.cleanup();
    wrapper = rtl.render(<Display closed={true} locked={false} />);
    expect(wrapper.container.childNodes[0].childNodes[0].textContent).toBe("Unlocked");
})

it("when `locked` or `closed` use the `red-led` class", () => {
    const wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.container.childNodes[0].childNodes[0].classList[1]).toBe("red-led")
    expect(wrapper.container.childNodes[0].childNodes[1].classList[1]).toBe("red-led")
})

it("when `unlocked` or `open` use the `green-led` class", () => {
    const wrapper = rtl.render(<Display closed={false} locked={false} />);
    expect(wrapper.container.childNodes[0].childNodes[0].classList[1]).toBe("green-led")
    expect(wrapper.container.childNodes[0].childNodes[1].classList[1]).toBe("green-led")
})

rtl.cleanup();

describe('<Display />', () => {
  
    it('runs tests', () => {
      expect(true).toBe(true)
    })
  
    it('matches snapshot', () => { // identifies if anything changes after component is finished
      const tree = renderer.create(<Display flag={'yes'} />); // generates a dom tree
      
      expect(tree.toJSON()).toMatchSnapshot() //snapshots are a JSON representative of the DOM tree
    })
  
  })
