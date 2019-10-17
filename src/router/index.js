import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import Layout from 'src/layout';

import Echarts from 'page/echarts';
import EchartsPie from 'page/echarts/pie';

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
import RamdaList from 'page/ramda/list';
import RamdaLogic from 'page/ramda/logic';
import RamdaMath from 'page/ramda/math';
import RamdaObject from 'page/ramda/object';
import RamdaRelation from 'page/ramda/relation';
import RamdaString from 'page/ramda/string';

import Js from 'page/js';

import Ts from 'page/ts';

export const routerInfo = {
  echarts: {
    name: 'echarts',
    component: Echarts,
    child: {
      pie: {
        code: 'pie',
        name: '饼图',
        component: EchartsPie,
      }
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
        code: 'relation',
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
  }
};

const trans = (routerInfo = {}) => {
  const keys = Object.keys(routerInfo);

  if (keys.length === 0) {
    return null;
  }

  
};

export default () => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Layout}>
        <Route path="echarts" component={Echarts}>
          <Route path="pie" component={EchartsPie} />
        </Route>

        <Route path="test" component={Test}>
          <Route path="react" component={TestReact} />
          <Route path="react" component={TestReact} />
          <Route path="update" component={TestUpdate} />
          <Route path="hoc" component={TestHoc} />
        </Route>
      </Route>

      <Route path="/antd" component={Antd} />
      <Route path="/antd/cascader" component={Cascader} />
      <Route path="/antd/upload" component={Upload} />
      <Route path="/antd/select" component={Select} />
      <Route path="/antd/transfer" component={Transfer} />
      <Route path="/antd/inputnumber" component={InputNumber} />

      <Route path="/ramda" component={Ramda} />
      <Route path="/ramda/function" component={RamdaFunction} />
      <Route path="/ramda/list" component={RamdaList} />
      <Route path="/ramda/logic" component={RamdaLogic} />
      <Route path="/ramda/math" component={RamdaMath} />
      <Route path="/ramda/object" component={RamdaObject} />
      <Route path="/ramda/relation" component={RamdaRelation} />
      <Route path="/ramda/string" component={RamdaString} />

      <Route path="/ts" component={Ts} />
    </Router>
  );
};
