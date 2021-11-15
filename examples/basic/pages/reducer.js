import React from 'react'
import useAsyncLoading from 'use-async-loading'
import wait from '../wait'

const Submit = () => {
  let [loading, value, error, dispatch] = useAsyncLoading(0)
  return <div>
    <h1>reducer</h1>
    <button onClick={() => dispatch(x => x + 1)}>+1</button>
    <button onClick={() => dispatch(async () => (await wait(1000), x => x + 1))}>+1 async</button>
    <pre>{JSON.stringify({ loading, value, error }, null, 2)}</pre>
  </div>
}

export default Submit