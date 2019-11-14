import React from 'react';

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { children } = this.props;
    const { count } = this.state;
    const childrens = React.Children.map(children, child =>
      React.cloneElement(child, {
        count,
        add: this.add,
      }),
    );
    return <div className="father">{childrens}</div>;
  }
}

export default Father;
