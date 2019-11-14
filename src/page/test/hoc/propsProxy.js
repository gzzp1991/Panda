/* eslint-disable max-classes-per-file */
import React from 'react';

function propsProxyHoc({ count = 0 }) {
  return function(Component) {
    return class HocComponent extends React.PureComponent {
      render() {
        return (
          <div>
            包裹
            <Component count={count} {...this.props} />
          </div>
        );
      }
    };
  };
}

@propsProxyHoc({
  count: 2,
})
class Tob extends React.PureComponent {
  render() {
    const { count } = this.props;
    console.log('count ', count);
    return <div className="tob">count：{count}</div>;
  }
}

export default Tob;
