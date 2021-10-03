import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Join</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Image src="/dummy_logo.png" alt="Vercel Logo" width={800} height={400} />
        <h2 className={styles.title}>
          Join
        </h2>
        <div>
        <h1 className={styles.title}>GITHUB_NAME</h1> 
        <p>Celberate the conference without fail.October 31, 2021 9am-1pm PT / Online.</p>
        </div>
        <img src="GITHUB_URL" width="256px" height="256px"/>
        <p>Contact him at his GITHUB_EMAIL</p>
       </main>
    </div>
  )
}