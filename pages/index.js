import Head from 'next/head'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('./map'), { ssr: false })

export default () => <App />
