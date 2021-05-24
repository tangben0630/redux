let initState = {
  name: '不知道',
  desc: "555555555555"
}

export function infoReducer(state = initState, action){
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
      break;
    case 'SET_DESC':
      return {
        ...state,
        name: action.desc
      }
      break;
    default:
      return state
  }
}