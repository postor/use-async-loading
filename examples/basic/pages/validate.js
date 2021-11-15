import React from 'react'
import useAsyncLoading from 'use-async-loading'
import wait from '../wait'

const Submit = () => {
  let [loading, value, error, dispatch] = useAsyncLoading('unvalidated|未验证')
  return <div>
    <h1>validate field | 验证字段格式</h1>
    <input
      placeholder="only number allowed | 只允许数字"
      onChange={e => dispatch(async () => {
        let valid = /^\d*$/.test(e.target.value)
        await wait(1000)
        if (!valid) throw 'fail!|未通过！'
        return 'pass! | 通过！'
      })} />
    <pre>{JSON.stringify({ loading, validate: value, error }, null, 2)}</pre>
  </div>
}

export default Submit