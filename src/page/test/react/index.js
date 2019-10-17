import React from 'react';
import Clone from './clone';
import Accessibility from './accessibility';
import RenderProps from './renderProps';
import Key from './key';
import Lifecycle from './lifecycle';
import Hoc from './hoc';
import ReactGridLayout from './reactGridLayout';

class TestReact extends React.Component {
  render() {
    return (
      <div className="test-react">
        test-react
        {/* <Clone />
        <Accessibility />
        <RenderProps />
        <Key />
        <Lifecycle />
        <Hoc /> */}
        <ReactGridLayout />
      </div>
    )
  }
}

export default TestReact;