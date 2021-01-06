export default function createStore(reducer,initState){
  //大体其实就是createStore返回三个函数，这三个函数，订阅函数，操作数据
  let state = initState
  let listeners = []
  function subscribe(listener){
    listeners.push(listener)
  }
  function getState(){
    return state
  }

  

  function dispatch(action){
    state = reducer(state,action)
    for(let i=0;i<listeners.length;i++){
      listeners[i]()
    }
  }

  return {
    subscribe,
    getState,
    dispatch
  }
}

