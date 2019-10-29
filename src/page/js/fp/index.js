import React, { PureComponent } from 'react';
import Markdown from 'markdown-to-jsx';
import marked from 'marked';
import README from './README.md';

class JsFp extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      // <div className="js-fp markdown-body">
      //   {/* <Markdown>{README}</Markdown> */}
      // </div>
      <div
        className="js-fp markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(README) }}
      />
    );
  }
}

export default JsFp;
