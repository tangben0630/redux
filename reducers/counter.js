let initState = {
  count: 0,
}

export function infoReducer(state = initState, action){
  switch (action.type) {
    case 'SET_ADD':
      return {
        ...state,
        name: action.count+1
      }
      break;
    case 'SET_MYLS':
      return {
        ...state,
        name: action.count-1
      }
      break;
    default:
      return state
  }
}