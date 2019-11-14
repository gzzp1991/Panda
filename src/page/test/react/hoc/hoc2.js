import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

function funcChildHoc(WrapperComponent) {
  class TestComponent extends React.Component {
    static testStaticProp = 'test';

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  hoistNonReactStatic(TestComponent, WrapperComponent);
  // TestComponent.childStaticProp = WrapperComponent.childStaticProp;
  return TestComponent;
}

@funcChildHoc
class Child extends React.Component {
  static childStaticProp = 'child';

  childMethod() {
    return 'child-method';
  }

  render() {
    return <div>Child</div>;
  }
}

class TestReactHoc2 extends React.Component {
  childRef = React.createRef();

  componentDidMount() {
    console.log('ref ', this.childRef);
    console.log('static ', Child.childStaticProp);
    console.log('static ', Child.testStaticProp);
  }

  render() {
    return (
      <div className="test-react-hoc-2">
        test-react-hoc-2
        <Child ref={this.childRef} />
      </div>
    );
  }
}

export default TestReactHoc2;
