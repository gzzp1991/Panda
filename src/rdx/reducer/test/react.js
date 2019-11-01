import TYPE from 'rdx/type/test/react';

const { CLEAR_TYPE } = TYPE;

const initialState = {
  type: 'test.react'
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
