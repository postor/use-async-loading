import Link from 'next/link'
const menus = [
  ['inital data', '/'],
  ['submit form', '/submit'],
  ['validate field', '/validate'],
  ['reducer', '/reducer'],
]

function MyApp({ Component, pageProps }) {
  return <div>
    <div>{menus.map(([title, to]) => <Link key={to} href={to}><a style={{
      padding: '0 10px'
    }}>{title}</a></Link>)}</div>
    <Component {...pageProps} />
  </div>
}

export default MyApp