import React, { PureComponent } from "react";
import { withRouter } from "react-router";
import classnames from "classnames";
import SiderSecond from "../second";
import "./index.less";

@withRouter
class LayoutSiderFirst extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: Object.keys(props.routes)[0]
    };
  }

  onClick = (evt, child, path) => {
    const rCode = evt.target.getAttribute("data-rcode");
    this.setState({ active: rCode });

    const { history } = this.props;
    if (!child) {
      history.push(path);
    }
  };

  render() {
    const { routes, path } = this.props;
    const { active } = this.state;

    return (
      <>
        <div className="layout-sider-first clear-fix">
          {Object.keys(routes).map((r, i) => {
            const now = routes[r];
            return (
              <div
                key={r}
                className={classnames("layout-sider-first-item", {
                  active: !active ? i === 0 : r === active
                })}
                data-rcode={r}
                onClick={evt => this.onClick(evt, now.child, `${path}/${r}`)}
              >
                {now.name}
              </div>
            );
          })}
        </div>
        {routes[active].child && (
          <SiderSecond
            path={`${path}/${active}`}
            routes={routes[active].child}
          />
        )}
      </>
    );
  }
}

export default LayoutSiderFirst;
