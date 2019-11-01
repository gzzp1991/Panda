import React, { PureComponent } from 'react';
import Echarts from 'echarts';
import { connect } from 'react-redux';
import './index.less';

@connect(
  state => ({
    type: state.echarts.bar,
  }),
  null,
)
class EchartsBar extends PureComponent {
  componentDidMount() {
    const option = {
      // 自定义文字
      graphic: {
        id: 'totalTxt',
        type: 'text',
        left: 'center',
        silent: true,
        cursor: 'none',
        style: {
          text: '总人数100',
          font: 'bolder 20px',
          fill: '#666',
        },
      },
      tooltip: {},
      dataset: {
        source: [
          ['amount', 'product'],
          [58212, 'Matcha Latte'],
          [78254, 'Milk Tea'],
          [41032, 'Cheese Cocoa'],
          [0, 'Cheese Brownie'],
        ],
      },
      grid: { containLabel: true },
      xAxis: { type: 'category' },
      yAxis: {},
      series: {
        type: 'bar',
        encode: {
          x: 'product',
          y: 'amount',
          // itemName: 1,
        },
        itemStyle: {
          normal: {
            color: function(params) {
              var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265'];
              return colorList[params.dataIndex];
            },
          },
        },
      },
    };

    const bar = document.querySelector('#bar');
    if (bar) {
      this.barChart = Echarts.init(bar);
      const width = this.barChart.getWidth();
      // option.graphic.style.x = width / 2;
      this.barChart.setOption(option);
    }
  }

  render() {
    return (
      <div className="echart-bar">
        <div id="bar" />
      </div>
    );
  }
}

export default EchartsBar;
