
// import {reducer} from './redux.js'
export function createStore(reducer,initState){
  let state = initState
  let listeners = []

  function subscribe(fn){
    listeners.push(fn)
  }

  function dispatch(action){
    state = reducer(state, action)
    listeners.forEach(fn=>{
      fn()
    })
  }

  function changeState(){
    listeners.forEach(fn=>{
      fn()
    })
  }

  function getStore(){
    return state
  }
  function getState(){
    return state
  }

  return {
    subscribe,
    dispatch,
    getStore,
    changeState,
    getState
  }
}


