import Header from '../../companents/Header/Header'
import Footer from '../../companents/Footer/Footer'
import style from './style.module.css'
import Input from '../../companents/Input/Input';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function RegPage() {
  const navigate = useNavigate()
  const [value, setValue] = useState({ name: '', surname: '', email: '', pwd: '' })

  const arr = ['name', 'surname', 'email', 'pwd']

  async function show() {
    debugger
    const result = await axios.post('http://localhost:5000/api/registration', value)
    console.log(result);
    navigate('/student')
  }

  return (
    <div>
      < Header />

      <div className={style.wrapper}>

        <div className={style.signUpInfo}>

          <h1>Sign Up</h1>
          <Input arr={arr} value={value} setValue={setValue} />
          <div className={style.wrapperBtn} onClick={show}>Sign Up</div>

        </div >

        <div className={style.signUpImg}></div>

      </div >

      <Footer />
    </div >
  );
}

export default RegPage;