import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { routerInfo } from 'src/router';

import First from './first';
import Second from './second';
// import Third from './third';
import './index.less';

class LayoutSiderNav  extends PureComponent {
  render() {
    const { nav = {}, path } = this.props;

    return (
      <div className="layout-sider-nav">
        {Object.keys(nav).map((f, fIndex) => {
          const first = nav[f];
          return (
            <First path={`${path}/${f}`} first={first} key={first.code || first.name}>
              {
                first.child && (
                  Object.keys(first.child).map((s, sIndex) => {
                    const second = first.child[s];
                    return <Second path={`${path}/${f}/${s}`} second={second} key={second.code || second.name}/>
                  })
                )
              }
            </First>
          );
        })}
      </div>
    );
  }
}

export default LayoutSiderNav;
