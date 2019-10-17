import React from 'react';
import { Select, Button, Icon, Form, Input } from 'antd';
import { findDOMNode } from 'react-dom';
import debounce from 'util/debounce/debounce';

const { Option: SelectOption } = Select;
const { Item: FormItem } = Form;

@Form.create()
class Selects extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = debounce(this.onSearch, 1000);
    this.state = {
      count: 0,
      bl: false,
    };
  }

  componentDidMount() {
    const { form } = this.props;
    // form.setFieldsValue({
    //   select: '1',
    // });
  }

  onChange = v => {
    console.log('onChange ', v, typeof v);
  };

  onSearch = word => {
    console.log('onSearch ', word);
  };

  onClick = () => {
    const { form: { getFieldValue } } = this.props;
    console.log(getFieldValue('select'));
    this.setState((state, props) => {
      console.log('state props ', state, props);
      return { count: state.count + 1 };
    });
  };

  render() {
    const { form } = this.props;
    const { count } = this.state;
    const Abc = React.memo(props => {
      console.log('abc');
      return <div>{props.count}</div>
    });
    return (
      <>
        <FormItem>
          {form.getFieldDecorator('select')(
            <Select
              showSearch
              allowClear
              onChange={this.onChange}
              onSearch={this.onSearch}
              defaultActiveFirstOption>
              <SelectOption key="1" value={1}>zp</SelectOption>
              <SelectOption key="2" value="2">lc</SelectOption>
              <SelectOption key="3" value="3">ws</SelectOption>
            </Select>
          )}
        </FormItem>
        <div><Button onClick={this.onClick}>查看</Button></div>
        <Abc count={count} />
      </>
    )
  }
}

export default Selects;

// class Bob extends React.Component {
//   constructor(props) {
//     super(props);
//     this.sonRef = React.createRef();
//     this.girlRef = React.createRef();
//   };

//   onClick = () => {
//     this.sonRef.current.add();
//   };

//   render() {
//     return (
//       <>
//         <Main>
//           <Son ref={this.sonRef}/>
//           <Girl ref={this.girlRef}/>
//         </Main>
//         <Button onClick={this.onClick}>加一</Button>
//       </>
//     );
//   }
// }

// class Main extends React.Component {
//   render() {
//     const { children } = this.props;
//     return (
//       <div>
//         {children}
//         {React.Children.map(children, child => {
//           return React.cloneElement(child);
//         })}
//       </div>
//     )
//   }
// }

// class Son extends React.Component {
//   state = {
//     count: 0,
//   };

//   add = () => { this.setState((state) => ({ count: state.count + 1 })) };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         Son{count}
//       </div>
//     )
//   }
// }

// class Girl extends React.Component {
//   render() {
//     return (
//       <div>
//         Girl
//       </div>
//     )
//   }
// }

// export default Bob;