import React from 'react';
import { Upload, Button, Icon, Form, Input } from 'antd';

const { Item: FormItem } = Form;

@Form.create()
class Uploads extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileList: [] };
  }

  componentDidMount() {
    const { form } = this.props;
    form.setFieldsValue({
      upload: [
        {
          uid: 'rc-upload-1556614867303-3',
          name: 'webpack.base.js',
        },
      ],
    });
  }

  beforeUpload = args => {
    // return new Promise((resolve,reject) => {
    //   resolve(args);
    //   // reject(null);
    // })
    console.log('before ', args);
    return true;
  };

  file = evt => {
    console.log('22');
    if (Array.isArray(evt)) {
      return evt;
    }
    // return evt && evt.fileList.slice(-1);
  };

  onChange = ({ file, fileList = [] }) => {
    console.log('111 ', fileList);
    const { form } = this.props;
    // form.setFieldsValue({
    //   upload: fileList.slice(-1)
    // });
    // return fileList.slice(-1);
    // this.setState({
    //   fileList: fileList
    // });
  };

  render() {
    const { fileList } = this.state;
    const { form } = this.props;
    return (
      <React.Fragment>
        <FormItem>
          {form.getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.file,
          })(
            <Upload
              // fileList={fileList}
              action="//jsonplaceholder.typicode.com/posts/"
              onChange={this.onChange}
              beforeUpload={this.beforeUpload}>
              <Button><Icon type="upload" /> 点击上传</Button>
            </Upload>
          )}
        </FormItem>
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={this.beforeUpload}>
          <Button><Icon type="upload" /> Click Upload! </Button>
        </Upload>
      </React.Fragment>
    )
  }
}

export default Uploads;
