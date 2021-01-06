import createStore from './cerateStore.js'
import reducer from './reducer.js'
let initState = {
  name:'TT',
  age:18
}
let store = createStore(reducer,initState)

store.subscribe(()=>{
  let state = store.getState()
  console.log(state,'====');
})

store.dispatch({type:'AAA'
})
console.log(store.getState().age);
store.dispatch({type:'AAA'
})
console.log(store.getState().age);
store.dispatch({type:'AAA'
})
console.log(store.getState().age);
store.dispatch({type:'AAA'
})

