import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>EisCase</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    My Blog
                </h1>

                <div className={styles.grid}>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="http://eisdev.me" target="_blank">
                    powered by eisdev
                </a>
            </footer>
        </div>
    )
}
