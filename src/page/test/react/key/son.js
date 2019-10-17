import React from 'react';

class TestReactKeySon extends React.Component {
  componentDidMount() {
    console.log('新建');
  }

  componentDidUpdate() {
    console.log('更新');
  }

  componentWillUnmount() {
    console.log('卸载');
  }

  render() {
    const { key } = this.props;
    return (
      <div key={key} className="test-react-key-son">
        test-react-key-son
      </div>
    )
  }
}

export default TestReactKeySon;