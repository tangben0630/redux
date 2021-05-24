export function combineReducers(reducers){

  const keys = Object.keys(reducers)
  return function com(state = {}, action){
    let nextState = {}
    for(let i=0;i<keys.length;i++){
      const key = keys[i]
      const reducer = reducers[key]

      const prevKey = state[key]
      const nextKey = reducer(prevKey, action)
      nextState[key] = nextKey
    }
    return nextState
  }
}