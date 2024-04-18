import renderer from 'react-test-renderer';
import React from 'react';
import LeftSidebar from './LeftSidebar';

const renderTree = tree => renderer.create(tree);
describe('<LeftSidebar>', () => {
  it('should render component', () => {
    expect(renderTree(<LeftSidebar  
      children={/* React.ReactNode */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<LeftSidebar  
      children={/* React.ReactNode */} 
    />).toJSON()).toMatchSnapshot();
  });
});