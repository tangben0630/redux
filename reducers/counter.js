let initState = {
  count: 0,
}

export function countReducer(state = initState, action){
  switch (action.type) {
    case 'SET_ADD':
      console.log('jinlai');
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