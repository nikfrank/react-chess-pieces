import React, { Component } from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const syncSpy = jest.fn().mockReturnValue([1, 2, 3]);
const syncSpyUpdate = jest.fn().mockReturnValue(4);

const apiSpy = jest.fn().mockReturnValue(['a', 'b', 'c']);
const apiSpyUpdate = jest.fn().mockReturnValue('d');

class Tester extends Component {

  render(){
    
    return (
      <div>
      </div>
    );
  }
}


it('connects the hooks', (done) => {
  // mount a test component
  const p = mount(<P/>);
  
  // simulate a click to a button
  expect( p.find('.items').first().text() ).toEqual( '[]' );
  expect( p.find('.things').first().text() ).toEqual( '[]' );

});
