import React, { PureComponent } from 'react';
import Header from './header';
import Sider from './sider';
import Content from './content';
import './index.less';

class Layout extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     a: 1,
  //   };
  // }

  // add = () => {
  //   this.setState({ isAddVisible: true });
  // };

  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Header />
        <Sider />
        <Content>
          {children && children}
        </Content>
      </div>
    );
  }
}

export default Layout;
