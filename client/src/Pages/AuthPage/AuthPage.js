import Header from '../../companents/Header/Header'
import Footer from '../../companents/Footer/Footer'
import style from './style.module.css'
import Input from '../../companents/Input/Input'
import { useState } from 'react'

function AuthPage() {
    const [value, setValue] = useState({ email: '', pwd: '' })
    const arr = ['email', 'pwd']
    function show() {
        console.log(value);
    }
    return (
        <>
            < Header />

            <div className={style.login}>

                <div className={style.loginInfo}>

                    <h1>Login</h1>

                    <Input arr={arr} value={value} setValue={setValue} />

                    <div className={style.loginBtn} onClick={show}>Login</div>

                </div >

                <div className={style.loginImg}></div>

            </div >

            <Footer />
        </ >
    );
}


export default AuthPage