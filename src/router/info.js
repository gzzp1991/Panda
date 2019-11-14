import Echarts from 'page/echarts';
import EchartsPie from 'page/echarts/pie';
import EchartsBar from 'page/echarts/bar';

import Test from 'page/test';
import TestReact from 'page/test/react';
import TestUpdate from 'page/test/update';
import TestHoc from 'page/test/hoc';

import Antd from 'page/antd';
import Cascader from 'page/antd/C/Cascade';
import Upload from 'page/antd/U/Upload';
import Select from 'page/antd/S/Select';
import Transfer from 'page/antd/T/Transfer';
import InputNumber from 'page/antd/I/InputNumber';

import Ramda from 'page/ramda';

import RamdaFunction from 'page/ramda/function';
import RamdaFunctionAlways from 'page/ramda/function/always';

import RamdaList from 'page/ramda/list';
import RamdaLogic from 'page/ramda/logic';
import RamdaMath from 'page/ramda/math';
import RamdaObject from 'page/ramda/object';
import RamdaRelation from 'page/ramda/relation';
import RamdaString from 'page/ramda/string';

import Js from 'page/js';
import JsFp from 'page/js/fp';

import Ts from 'page/ts';

export default {
  echarts: {
    name: 'echarts',
    component: Echarts,
    child: {
      pie: {
        code: 'pie',
        name: '饼图',
        component: EchartsPie,
      },
      bar: {
        code: 'bar',
        name: '柱状图',
        component: EchartsBar,
      },
    },
  },
  test: {
    code: 'test',
    name: '测试',
    component: Test,
    child: {
      react: {
        name: 'react',
        component: TestReact,
      },
      update: {
        name: 'update',
        component: TestUpdate,
      },
      hoc: {
        code: 'hoc',
        name: '高阶组件',
        component: TestHoc,
      },
    },
  },
  ramda: {
    name: 'ramda',
    component: Ramda,
    child: {
      function: {
        name: 'function',
        component: RamdaFunction,
        child: {
          always: {
            name: 'always',
            component: RamdaFunctionAlways,
          },
        },
      },
      list: {
        name: 'list',
        component: RamdaList,
      },
      logic: {
        name: 'logic',
        component: RamdaLogic,
      },
      math: {
        name: 'math',
        component: RamdaMath,
      },
      object: {
        name: 'object',
        component: RamdaObject,
      },
      relation: {
        name: 'relation',
        component: RamdaLogic,
      },
      string: {
        name: 'string',
        component: RamdaString,
      },
    },
  },
  js: {
    name: 'javascipt',
    component: Js,
    child: {
      fp: {
        code: 'fp',
        name: '函数式编程',
        component: JsFp,
      },
    },
  },
};
