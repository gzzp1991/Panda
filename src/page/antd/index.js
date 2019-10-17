import React, { Component } from 'react';

// import Badge from './B/Badge';
// import Form from './F/Form';

class Page extends Component {
  constructor(props) {
    super(props);
    this.a = this.getA();
  };

  close = () => {
    console.log('关闭回调');
  };
  
  getA = () => {
    return 'a';
  };

  render() {
    console.log(this.a);
    const { children } = this.props;
    return (
      <div className="antd">
        antd
      </div>
    )
  }
}

export default Page;