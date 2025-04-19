import '../src/styles.css'
import Head from 'next/head'

function App ({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Vasco</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App