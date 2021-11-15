import React from 'react'
import useAsyncLoading from 'use-async-loading'
import wait from '../wait'
const Submit = () => {
  let [loading, value, error, dispatch] = useAsyncLoading('initial|初始')
  return <div>
    <h1>submit form | 提交表单</h1>
    <button disabled={loading} onClick={() => dispatch(async () => {
      await wait(2000)
      if (Math.random() < 0.5) throw 'something went wrong!|出错了！'
      return 'it works! | 运行正常！'
    })}>submit</button>
    <pre>{JSON.stringify({ loading, value, error }, null, 2)}</pre>
  </div>
}

export default Submit