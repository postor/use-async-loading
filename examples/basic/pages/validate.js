import React from 'react'
import useAsyncLoading from 'use-async-loading'
import wait from '../wait'

const Submit = () => {
  let [loading, value, error, start] = useAsyncLoading()
  return <div>
    <h1>validate field | 验证字段格式</h1>
    <input
      placeholder="only number allowed | 只允许数字"
      onChange={e => start(async () => {
        let valid = /^\d*$/.test(e.target.value)
        await wait(1000)
        if (!valid) throw 'something went wrong!|出错了！'
        return 'it works! | 运行正常！'
      })} />
    <pre>{JSON.stringify({ loading, value, error }, null, 2)}</pre>
    <hr/>
    <pre>{`const Submit = () => {
  let [loading, value, error, start] = useAsyncLoading()
  return <div>
    <h1>validate field | 验证字段格式</h1>
    <input
      placeholder="only number allowed | 只允许数字"
      onChange={e => start(async () => {
        let valid = /^\d*$/.test(e.target.value)
        await wait(1000)
        if (!valid) throw 'something went wrong!|出错了！'
        return 'it works! | 运行正常！'
      })} />
    <pre>{JSON.stringify({ loading, value, error }, null, 2)}</pre>
  </div>
}`}</pre>
  </div>
}

export default Submit