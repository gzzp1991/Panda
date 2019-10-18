import React, { PureComponent } from 'react';
import Markdown from 'markdown-to-jsx';
import README from './README.md';

class JsFp extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="js-fp">
        {/* {marked(README)} */}
        <Markdown>{README}</Markdown>
      </div>
    )
  }
}

export default JsFp;
