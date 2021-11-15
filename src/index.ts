import React, { useEffect, useRef, useState } from "react"

type Action<T> = T | ((v?: T) => T)
  | Promise<T> | ((v?: T) => Promise<T>)
  | ((val?: T) => Promise<(v?: T) => T>)

export function useAsyncLoading<T>(
  initialValue: T,
  fn?: Action<T>)
  : [loading: boolean, value: T, error: any, dispatch:
    (fn: Action<T>) => void] {
  let [loading, setLoading] = useState([0, initialValue, undefined] as [number, T | undefined, any])
  let curValue = useRef(initialValue as T | undefined)
  useEffect(() => {
    fn && dispatch(fn)
  }, [])
  // @ts-ignore
  return [...loading, dispatch]

  async function dispatch(fn: Action<T>) {
    setLoading(([l, v, e]) => [l + 1, v, e])
    try {
      let rtn = await drain(fn)
      setLoading(([l,v]) => {
        curValue.current = typeof rtn=='function'?rtn(v):rtn
        return [l - 1, curValue.current, undefined]
      })
    } catch (e) {
      setLoading(([l]) => [l - 1, undefined, e])
      curValue.current = undefined
    }
  }

  async function drain(fn: Action<T>): Promise<T> {
    //@ts-ignore
    if (typeof fn !== 'function') return fn.then ? await fn : fn
    //@ts-ignore
    let defered = fn(curValue.current)
    if (defered && typeof defered.then == 'function') {
      return await defered
    }
    return defered
  }
}


export default useAsyncLoading