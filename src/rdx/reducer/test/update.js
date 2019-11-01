import TYPE from 'rdx/type/test/update';

const { CLEAR_TYPE } = TYPE;

const initialState = {
  type: 'test.update'
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
