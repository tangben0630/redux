export default function reducer(state, action){
  switch (action.type) {
    case 'AAA':
      state = {
        ...state,
        age:state.age++
      }
      console.log(state.age,'state');
      return state
      break;
    case 'BBB':
      return {
        ...state,
        age:state.age--
      }
      break;
    default:
      return state
      break;
  }
}