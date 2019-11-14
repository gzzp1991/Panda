import React, { memo } from 'react';

const funcChildHoc = WrapperComponent => {
  class TestComponent extends React.Component {
    render() {
      return <WrapperComponent {...this.props} name="zp" />;
    }
  }
  return TestComponent;
};

const HocComponent = funcChildHoc(
  memo(({ name }) => {
    return <div>function-component: {name}</div>;
  }),
);

class TestReactHoc1 extends React.Component {
  render() {
    return (
      <div className="test-react-hoc-1">
        test-react-hoc-1
        <HocComponent />
      </div>
    );
  }
}

export default TestReactHoc1;
