import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import apple from 'react-test-renderer';

import App from './App';

describe("<App />", () => {
  it('should render without crashing', () => {
    render(<App />);
  });

  it('should render a <Display /> component with open displayed as one default', () => {
    const { getByText } = render(<App />);

    getByText(/open/i);
  });

  it('should render a <Display /> component with unlocked displayed as one default', () => {
    const { getByText } = render(<App />);

    getByText(/unlocked/i);
  });

  it('should render a <Control /> component with close button as default', () => {
      const { getByText } = render(<App />)

      getByText(/close gate/i)
  });

  it('should render a <Control /> control component with a lock gate button as default', () => {
    const { getByText } = render(<App />);

    getByText(/lock gate/i);
  });

  it('should match snapshot', () => {
    const tree = apple.create(<App />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});