
import Link from "next/link";
import styles from '@/styles/signup.module.css';
import Head from 'next/head';
import { useState } from "react";
import Axios from "axios";


function SignUp(){ 
    const [regUser, setUser] = useState('')
    const [regEmail, setEmail] = useState('')
    const [regPass, setPass] = useState('')
    const [regRepass, setRepass] = useState('')
  
    const [regStatuseErr, setRegstaterr] = useState('')
  
    const signup = (e) =>{
        e.preventDefault()

        Axios.post('http://localhost:4000/insert',{
          username: regUser, 
          email: regEmail, 
          password: regPass,
          repass: regRepass
        }).then((response)=>{
          console.log(response)
          if (response.data.message == "Successfully Registered"){
            window.location.href='/signin'
          }
          else if (response.data.message == "User already exists"){
            setRegstaterr(response.data.message)

          }
          else{
            setRegstaterr(response.data.message)
          }
          
        })
    
    
      };
    return ( 
        <>
        {/* Checking if working, and its working! */}
        {/* {console.log(registerName)}
        {console.log(registerEmail)}
        {console.log(registerPassword)} */}
            <Head>
                <title>Create Account</title>
                <meta name="description" content="Sign In" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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
                        <div className= {styles.SignupBox}>
                            <div className= {styles.SUMain}>
                            Create Your Account
                            </div>
                            <h3 className='text-danger'>{regStatuseErr}</h3>
                            <form className={styles.SUForm}>
                                <div className= {styles.SUFormDetails}>
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}> Username:
                                        </div>
                                        <input
                                            type="text"
                                            className={styles.SUInputs}
                                            name="username"
                                            id = "username"
                                            required
                                            onChange={(e)=>{setUser(e.target.value);}}
                                        />
                                    </div>
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}>Email:
                                        </div>
                                        <input
                                            type='email'
                                            id= "email"
                                            className={styles.SUInputs}
                                            name="email"
                                            required
                                            onChange={(e)=>{setEmail(e.target.value);}}
                                        />
                                    </div>
                                    
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}>Password: </div>
                                        <input
                                            type= 'password'
                                            id = "password"
                                            className={styles.SUInputs}
                                            name="password"
                                            required
                                            onChange={(e)=>{setPass(e.target.value);}}                                           
                                        />
                                    </div>
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}>Confirm Password: </div>
                                        <input
                                            type= 'password'
                                            id = "repassword"
                                            className={styles.SUInputs}
                                            name="cpassword"
                                            required
                                            onChange={(e)=>{setRepass(e.target.value);}}
                                        />
                                    </div>
                                </div>
                                <input type='submit' value= 'Sign Up' onClick={signup} className={styles.submitbttn}/>

                                
                            </form>
                        </div>
                        <div className= {styles.DetailsBox}>
                            <div className={styles.DetailsHead}>One of Us?</div>
                            <div className={styles.DetailsInfo}>If you already have your own account, just log in.
                            </div>
                            <Link href="/signin">
                                <button className={styles.HrefDir}>
                                    Sign In
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
 
export default SignUp ;