import { useEffect, useRef, useState } from "react"

let idGen = (function* () {
  let i = 0
  while (true) {
    yield i
    i++
  }
})()

export default function useAsyncLoading<T>(fn?: () => Promise<T> | Promise<T>) {
  let [loading, setLoading] = useState([false, undefined as T | undefined, undefined as any])
  let [func, setFunc] = useState(fn as any)
  let curId = useRef(0)
  useEffect(() => {
    if (!func) return
    let id = idGen.next().value as number
    curId.current = id
    setLoading([true, undefined, undefined])
    func
      .then((rtn: T) => id == curId.current && setLoading([false, rtn, undefined]))
      .catch((e: any) => id == curId.current && setLoading([false, undefined, e]))
  }, [func])

  return [...loading, setFunc]
}

