import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Join</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Join
        </h2>
        <div>
        <h1 className={styles.title}>Viswa</h1> 
      
        </div>
        <img src="https://avatars.githubusercontent.com/u/3106852?v=4" width="128" height="128"/>

        <p>Celberate the conference without fail.</p>
        <p>October 31, 2021 9am-1pm PT / Online.</p>
        
        <a className={styles.twitter_share_button}
   href="https://twitter.com/intent/tweet?text=Join%20the%20Conference https://avatars.githubusercontent.com/u/3106852?v=4">
Tweet Your Ticket</a>
       </main>
       <footer >
        <section  className={styles.footersection}>
          <a href="https://twitter.com" target="_blank"rel="noopener noreferrer">
            <Image src="/twitter.png" alt="Twitter Logo" width={64} height={64} />
          </a>
          <a href="https://facebook.com" target="_blank"rel="noopener noreferrer">
          <Image src="/facebook.png" alt="Facebook Logo" width={64} height={64} />
          </a>
          <a href="https://linkedin.com" target="_blank"rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="Facebook Logo" width={64} height={64} />
          </a>
          </section>
        <section className={styles.footer}>
          
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with Love by Community
        </a>
        </section>
      </footer>
    </div>
  )
}
