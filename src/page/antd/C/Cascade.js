import React from 'react';
import { Cascader, Form } from 'antd';
import { Position, PositionCity, PositionProvince } from '../../test/position';

const { Item: FormItem } = Form;

@Form.create()
class cascader extends React.Component {
  state = {
    aaa: '1'
  };

  onClick = () => {
    console.log('onclick');
  };

  componentDidMount() {
    const { form: { setFieldsValue, getFieldValue } } = this.props;
    setFieldsValue({
      cascader: ['天津市1']
    });
    setTimeout(() => {
      console.log(getFieldValue('cascader'));
      this.setState({
        aaa: getFieldValue('cascader')
      });
    }, 2000);
  }

  render() {
    const { form } = this.props;
    const { aaa } = this.state;
    return (
      [
        <FormItem>
          {form.getFieldDecorator('cascader')(
            <Cascader
              options={PositionProvince}
            />
          )}
        </FormItem>,
        <div>{aaa}</div>
      ]
    )
  }
}

export default cascader;