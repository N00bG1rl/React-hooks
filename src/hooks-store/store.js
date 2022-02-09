import { useState, useEffect } from 'react'

let globalState = {}
let listeners = []
let actions = {}

// Custom hook
export const useStore = (shouldListen = true) => {
  //[1] is state updating func
  const setState = useState(globalState)[1]

  const dispatch = (actionIndentifier, payload) => {
    const newState = actions[actionIndentifier](globalState, payload)
    globalState = { ...globalState, ...newState }

    for (const listener of listeners) {
      listener(globalState)
    }
  }

  // Run for every update that is made wherever this custom hook is used
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState)
    }

    // Run cleanup when component is removed
    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState)
      }
    }
  }, [setState, shouldListen])

  return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }
  }
  actions = { ...actions, ...userActions }
}
