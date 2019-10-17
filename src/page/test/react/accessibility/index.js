import React from 'react';
import { Select } from 'antd';
import './index.less';

class Accessibility extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
    this.state = {
      isOpen: false,
    };
  };

  componentDidMount() {
    console.log('ref ', this.divRef);
    window.addEventListener('click', this.onWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  onNowClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }))
  };

  onWindowClick = evt => {
    console.log(this.divRef.current.contains(evt.target));
    const { isOpen } = this.state;
    if (
      isOpen &&
      !this.divRef.current.contains(evt.target) &&
      this.divRef.current !== evt.target
    ) {
      this.setState({
        isOpen: false,
      })
    }
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="test-react-accessibility" ref={this.divRef}>
        <button onClick={this.onClick}>Select an option</button>
        {isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        )}
      </div>
    )
  }
}

export default Accessibility;
