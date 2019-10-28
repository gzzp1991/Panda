// 创建action
export function createAction(actions, PREFIX) {
  return R.pipe(
    R.assoc('clearState', {
      type: `${PREFIX}CLEAR_STATE`,
    }),
    // R.map(
    //   R.cond([
    //     [isAsync, actionAsyncFunc],
    //     [isNormal, actionPromiseFunc],
    //     [R.T, actionNormalFunc],
    //   ]),
    // ),
  )(actions);
}

// 创建reducer
export function createReducer(handlers, initialState, PREFIX) {
  return (state = initialState, action) => {
    if (handlers[action.type]) {
      const changedState = handlers[action.type](action);
      return {
        ...state,
        ...changedState,
      };
    }

    // type === CLEAR_STATE
    if (action.type === `${PREFIX}CLEAR_STATE`) {
      return R.cond([
        // 无参数时
        [v => v === undefined, () => initialState],
        // 参数类型为字符串或者数组时
        [
          v => typeof v === 'string' || Array.isArray(v),
          v => {
            return R.pipe(
              R.pick(Array.isArray(v) ? v : [v]),
              R.merge(state),
            )(initialState);
          },
        ],
        // 其他类型不处理
        [R.T, () => state],
      ])(action.data);
    }

    // 无符合项时，默认返回
    return state;
  };
}

// 创建action.type
export function createActionType(types, PREFIX) {
  return R.pipe(
    R.converge(R.zipObj, [R.identity, R.map(v => PREFIX + v)]),
    R.assoc('PREFIX', PREFIX),
  )(types);
}