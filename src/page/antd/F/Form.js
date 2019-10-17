import React, { Component } from 'react';
import { Form, Input } from 'antd';

const { Item: FormItem } = Form;

@Form.create()
class Forms extends Component {
  onClick = () => {
    console.log('onclick');
  };

  componentDidMount() {
    setTimeout(() => {
      const { form } = this.props;
      form.setFields({
        'field-one': {
          errors: [new Error('1111')]
        }
      });
      console.log('2222');
    }, 5000);
  }

  render() {
    const { form } = this.props;
    return (
      <div style={{ width: 200 }}>
        <FormItem label="111">
          {form.getFieldDecorator('field-one', {
            rules: [
              {
                required: true,
                message: '必填'
              }
            ]
          })(
            <Input placeholder="请输入" />
          )}
        </FormItem>
      </div>
    )
  }
}

export default Forms;