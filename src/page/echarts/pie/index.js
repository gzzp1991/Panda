import React, { PureComponent } from 'react';
import Echarts from 'echarts';
// import { Form, Button } from 'antd';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import './index.less';

// @connect(
//   state => ({
//     operates: state.common.operates,
//   }),
//   dispatch => ({
//     trunkNumberActions: bindActionCreators(trunkNumberActions, dispatch),
//   }),
// )
class Pie extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     a: 1,
  //   };
  // }

  componentDidMount() {
    const option = {
      title: {
        text: '折线图堆叠',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    const pie = document.querySelector('#pie');
    if (pie) {
      this.pieChart = Echarts.init(pie);
      this.pieChart.setOption(option);
    }
  }

  // add = () => {
  //   this.setState({ isAddVisible: true });
  // };

  render() {
    // const { a } = this.state;
    // const { b } = this.props;

    return (
      <div className="echart-pie">
        <div id="pie" />
      </div>
    );
  }
}

export default Pie;
