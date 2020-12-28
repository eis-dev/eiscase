import React from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

function MyApp({Component, pageProps}) {
    return (
        <div className={styles.container + " container"}>
            <Head>
                <title>EisCase</title>
            </Head>

            <main className={styles.main}>
                <div className="row">
                    <div className="col-10 offset-1">
                        <h1 className={styles.title}>
                            <Link href={"/"}>
                                <span className={'text-decoration-none text-black cursor-pointer'}>EisCase</span>
                            </Link>
                        </h1>
                        <Component {...pageProps} />
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                powered by eisdev
            </footer>
        </div>
    )
}

export default MyApp
