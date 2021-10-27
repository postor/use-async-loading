import React from 'react'
import useAsyncLoading from 'use-async-loading'
import wait from '../wait'
const Index = () => {
  let [loading, value, error] = useAsyncLoading(typeof window == 'undefined'
    ? undefined
    : async () => {
      await wait(2000)
      if (Math.random() < 0.5) throw 'something went wrong!|出错了！'
      return 'it works! | 运行正常！'
    })
  return <div>
    <h1>load initial values | 加载初始数据</h1>
    <pre>{JSON.stringify({ loading, value, error }, null, 2)}</pre>
    <hr/>
    <pre>
      {`const Index = () => {
  let [loading, value, error] = useAsyncLoading(typeof window == 'undefined'
    ? undefined
    : async () => {
      await wait(2000)
      if (Math.random() < 0.5) throw 'something went wrong!|出错了！'
      return 'it works! | 运行正常！'
    })
  return <div>
    <h1>load initial values | 加载初始数据</h1>
    <pre>{JSON.stringify({ loading, value, error }, null, 2)}</pre>
  </div>
}`}
    </pre>
  </div>
}

export default Index