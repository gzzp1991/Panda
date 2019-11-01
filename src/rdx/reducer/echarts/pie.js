import TYPE from 'rdx/type/echarts/pie';

const { CLEAR_TYPE } = TYPE;

const initialState = {
  type: 'echart.pie'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_TYPE:
      return {
        ...state,
        type: '',
      };
    default:
      return state;
  }
};
