
//创建常量的函数:
export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

//创建reducer的函数
export function createReducer(initialState, reducerMap){
  return (state = initialState, action)=>{
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}