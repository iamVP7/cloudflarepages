import Head from 'next/head'
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
        <h2 className={styles.title}>
          Join
        </h2>
        <div>
        <h1 className={styles.title}>fasdfa</h1> 
      
        </div>
        <img src="https://github.com/asdfasd.png" alt="Git hub pic" width={128} height={128}/>

        <p>Celberate the conference without fail.</p>
        <p>October 31, 2021 9am-1pm PT / Online.</p>
        
        <a className={styles.twitter_share_button}href="https://twitter.com/intent/tweet?text=Join%20the%20Conference  http://localhost:3000/conf/a294ee8c3611d9237234a2f42ccf81833d9235356fb57b7a53ea8aff9d180179">Tweet Your Ticket</a>
       </main>
       <footer >
       <section  className={styles.footersection}>
          <a href="https://twitter.com" target="_blank"rel="noopener noreferrer">
            <img  src="/twitter.png" alt="Twitter Logo" width={128} height={128} layout="fixed"/>
          </a>
          <a href="https://facebook.com" target="_blank"rel="noopener noreferrer">
          <img  src="/facebook.png" alt="Facebook Logo" width={128} height={128}/>
          </a>
          <a href="https://linkedin.com" target="_blank"rel="noopener noreferrer">
          <img src="/linkedin.png" alt="Linkedin Logo" width={128} height={128}/>
          </a>
          </section>
        <section className={styles.footer}>
          
        <a
          href="#"
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
