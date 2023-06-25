import { useState } from 'react'
import styles from './loginpage.module.css'
import {FcGoogle} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'



export default function Login(){
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()

    const onClickSignIn = async () => {
        const result = await signIn('google')
        if (result?.error) {
            console.log(result.error);
          } else {
            router.push('/user');
          }
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.desktopViewBoard}>
                <h1 className={styles.desktopViewBoardHeading}>Board.</h1>
            </div>
            <div className={styles.loginContainerMain}>
                <div className={styles.signInContainer}>
                   <h1 className={styles.signInHeading}>Sign In</h1>
                   <p className={styles.signInPara}>Sign in to your account</p>
                   <div className={styles.loginContainers}>
                        <button className={styles.loginContainer} onClick={onClickSignIn}>
                            <FcGoogle width={14} height={14}/>
                            <p className={styles.loginContainerPara}>Sign in with google</p>
                        </button>
                        <button className={styles.loginContainer}>
                            <FaApple width={14} height={14}/>
                            <p className={styles.loginContainerPara}>Sign in with google</p>
                        </button>
                    </div>
                    <div className={styles.loginFormContainer}>
                        <div style={{margin:'auto', width:'85%'}}>
                            <div className={styles.inputFormContainer}>
                                <label className={styles.loginFormName} htmlFor='name'>Email address</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' className={styles.loginFormInput}/>
                            </div>
                            <div className={styles.inputFormContainer}>
                                <label className={styles.loginFormName} htmlFor='password'>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className={styles.loginFormInput}/>
                            </div>
                            <p className={styles.forgotPassword}>Forgot password?</p>
                            <button type="button" className={styles.signInBtn}>Sign In</button>
                        </div>
                    </div> 
                    <p className={styles.accountDesription}>Don't have an account? <span style={{color:'#346BD4'}}>Register here</span></p>
                </div>
            </div>
        </div>
    )
}