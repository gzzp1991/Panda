import { CLEAR_TYPE } from 'rdx/type/test/update';

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
