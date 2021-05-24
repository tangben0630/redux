export function reducer(state, action){
  switch (action.type) {
    case 'INCREMENT':
      return {
        state,
        count: action.count+1
      }
      break;
  
    default:
      break;
  }
  return {
        state
      }
}