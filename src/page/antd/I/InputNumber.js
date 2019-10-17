import React from 'react';
import { InputNumber, Form } from 'antd';

const { Item: FormItem } = Form;

@Form.create()
class Inputs extends React.Component {
  componentDidMount() {
    const { form: { setFieldsValue, getFieldValue } } = this.props;
    setFieldsValue({
      inputnumber: 15
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <>
        <FormItem>
          {getFieldDecorator('inputnumber')(
            <InputNumber defaultValue={5} min={1} max={10} />
          )}
        </FormItem>
      </>
    )
  }
}

export default Inputs;