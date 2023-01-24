
import Link from "next/link";
import styles from '@/styles/dashboard.module.css'
import Head from 'next/head'
import { useRouter } from "next/router";
import Cookies from "js-cookie";
// import bodyParser from "body-parser";


export const getStaticProps = async() =>{
  
    const res = await fetch('http://localhost:4000/data');
    const data = await res.json();


    return {
        props: { image_blob: data }
    }
}

const getdata = ({ image_blob }) => {
        const router = useRouter();
        // // USING JS COOKIE TO CHECK IF THE USER IS VERIFY OR NOT
        const logOut = () => {
            Cookies.remove("loggedin")
            router.push('/')
        }
          
        return ( 
            <>
                <Head>
                    <title>Dashboard</title>
                    <meta name="description" content="Sign In" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
                    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11" />
                    <script src="https://kit.fontawesome.com/3e1139830b.js" crossorigin="anonymous"></script>

                </Head>
                <main className={styles.main}>
                    <div className={styles.navbarcontainer}>
                        <div className={styles.navbar}>
                            <Link href= "/dashboard" className={styles.navbarcontent}>Dashboard</Link>
                            {/* <Link href="/" className={styles.navbarcontent}>Log-Out</Link> */}
                            <button onClick={logOut} className={styles.navbarcontent}>Log-Out</button>
                        </div>
                    </div>
                    <div className={styles.contentContainer} >
                        <div className="page-section-heading">
                        <h1> Open Cv data </h1> {image_blob.map(datas => (
                            <ul>
                                <h2> {datas.date_time} </h2>
                                <img src= {`data:image/png;base64,${datas.captured}`}
                                    alt=""
                                    width="300"
                                    height="300" />
                            </ul>
                        ))} </div>
                    </div>
                </main>
            </>
        )
    }
    export const config = {
        api: {bodyParser: {
                sizeLimit: '4mb',
            },
        },
    }
 
export default getdata ;