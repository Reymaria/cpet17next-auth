
import Head from 'next/head'
import styles from '@/styles/forgotpass.module.css'
import Link from 'next/link'
import React, {useState } from 'react'
import Axios from 'axios'
function ForgotPass() {

  const [findEmail, setFindemail] = useState('')
  const [findStatuseErr, findstaterr] = useState('')
  const forgot = (e) =>{
    e.preventDefault()
    Axios.post('http://localhost:4000/find',{
      email: findEmail, 
    }).then((response) => {
      if (response.data.message == 'Email found'){
        window.location.href='/newpass?email='+findEmail
      }else{
        findstaterr(response.data.message)
      }
    });

};
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.contentbody}>
            <div className= {styles.top} >
            Forgot Your Password?
            </div>
            <div className= {styles.middle}>
            You can reset your password by proving your email address.
            </div>
            <h3 className='text-danger'>{findStatuseErr}</h3>

            <div className= {styles.low} >
                <form className= {styles.FormDetails}>
                    <div className={styles.FPDetails}>
                        <div className={styles.FPLabels}>
                        Email:
                        </div>
                        <input type="email" className={styles.FPInputs} required onChange={(e)=>{setFindemail(e.target.value);}}/>
                    </div>
                    <div className= {styles.lowerpart} >
                        <div className= {styles.lowpart}>
                            <input type='submit' value= 'Submit' className={styles.submitbttn} onClick={forgot}/>
                        </div>
                        <Link href="/signin" className= {styles.lowpart} >
                            <button className= {styles.HrefDir}>
                               or Return to Login
                            </button>

                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </main>
    </>
  )
}
export default ForgotPass