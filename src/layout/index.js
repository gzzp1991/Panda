import React, { PureComponent } from 'react';
import Header from './header';
import Sider from './sider';
import Content from './content';
import './index.less';

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFold: false,
    };
  }

  updateFold = sign => {
    this.setState({ isFold: sign });
  };

  render() {
    const { children } = this.props;
    const { isFold } = this.state;

    return (
      <div className="layout">
        <Header />
        <Sider isFold={isFold} />
        <Content isFold={isFold} updateFold={this.updateFold}>
          {children && children}
        </Content>
      </div>
    );
  }
}

export default Layout;
