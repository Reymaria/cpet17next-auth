
import Link from "next/link";
import styles from '@/styles/signin.module.css'
import Head from 'next/head'
import React, { useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";


function SignIn(){
    const router = useRouter()
    const [logUser, setUser] = useState('')
    const [logPass, setPass] = useState('')
    const [logStatuseErr, setLogstaterr] = useState('')
    const login = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:4000/read',{
          username: logUser, 
          password: logPass
        }).then((response) => {
          if (response.data.message == 'Verified'){
            Cookies.set("loggedin", true)
            router.push('/dashboard')
            // window.location.href='/dashboard'

          }else{
            setLogstaterr(response.data.message)
          }
        });

    };
    return ( 
        <>
            <Head>
                <title>Log In</title>
                <meta name="description" content="Sign In" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            </Head>
            <main className={styles.main}>
                <div className={styles.navbarcontainer}>
                    <div className={styles.navbar}>
                        <Link href= "/" className={styles.navbarcontent}>Team 5G</Link>
                        <Link href="/signin" className={styles.navbarcontent}>Sign In</Link>
                        <Link href= "/signup" className={styles.navbarcontent}>SignUp</Link>
                    </div>
                </div>
                <div className={styles.contentContainer} >
                    <div className= {styles.BoxContainer} >
                        <div className= {styles.SigninBox}>
                            <div className= {styles.SIMain}>
                            Login to Your Account
                            </div>
                            <h3 className='text-danger'>{logStatuseErr}</h3>
                            <div className={styles.SIForm}>
                                <div className= {styles.SIFormDetails}>
                                    <div className={styles.SIDetails}>
                                        <div className={styles.SILabels}> Username:
                                        </div>
                                        <input type='text' className={styles.SIInputs} name = "username" required onChange={(e)=>{setUser(e.target.value);}}/>
                                    </div>
                                    <div className={styles.SIDetails}>
                                        <div className={styles.SILabels}>Password: </div>
                                        <input type= 'password' className={styles.SIInputs} name = "password" onChange={(e)=>{setPass(e.target.value);}}/>
                                    </div>
                                </div>
                                <Link href='/forgotpass' className= {styles.forgotpassHref}>
                                    Forgot Your Password?
                                </Link>
                                <input type='submit' value= 'Login' className={styles.submitbttn} onClick={login}  />

                                
                            </div>
                        </div>
                        <div className= {styles.DetailsBox}>
                            <div className={styles.DetailsHead}>New Here?</div>
                            <div className={styles.DetailsInfo}>Enter your personal information and  start your journey with us!
                            </div>
                            <Link href="/signup">
                                <button className={styles.HrefDir}>
                                    Sign Up
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
 
export default SignIn ;