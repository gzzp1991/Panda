import React from 'react';

@propsProxyHoc({
  count: 2,
})
class Tob extends React.Component {
  render() {
    const { count } = this.props;
    console.log('count ', count);
    return (
      <div className="tob">
        count：{count}
      </div>
    )
  }
}

export default Tob;

function propsProxyHoc({
  count = 0,
}) {
  return function(Component) {
    return class HocComponent extends React.Component {
      render() {
        return (
          <div>
            包裹<Component count={count} {...this.props} />
          </div>
        )
      };
    }
  }
}