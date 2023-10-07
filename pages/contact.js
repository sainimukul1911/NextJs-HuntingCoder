import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const contact = () => {
  const [name, setname ] = useState('')
  const [age, setage ] = useState('')
  const [email, setemail ] = useState('')
  const [password, setpassword ] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
 
    // const formData = new FormData(event.target)
    const formData = {name,age,email,password};
    fetch('/api/postcontact', {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then(()=>{
      alert("data submission successful")
      setname('')
      setage('')
      setpassword('')
      setemail('')
    })
 
  }

  const handleChange = (e) => {
    if(e.target.id == 'name'){
      setname(e.target.value)
    }
    else if(e.target.id == 'password'){
      setpassword(e.target.value)
    }
    else if(e.target.id == 'email'){
      setemail(e.target.value)
    }
    else if(e.target.id == 'number'){
      setage(e.target.value)
    }
  }

  return (
    <>
    <div><h1 className={styles.title}>Contact us</h1></div>
    <form className={styles.main} onSubmit={onSubmit}>
    <label className={styles.labels} htmlFor='name' >Enter your name</label>
    <input type="text" id='name' value={name} onChange={handleChange} />
    <label className={styles.labels} htmlFor='number'>Enter your Age</label>
    <input type='number' id='number' value={age} onChange={handleChange} />
    <label className={styles.labels} htmlFor='email'>Enter your Email</label>
    <input type='email' id='email' value={email} onChange={handleChange} />
    <label className={styles.labels} htmlFor='password'>Enter your password</label>
    <input type='password' id='password' value={password} onChange={handleChange} ></input>
    <input type='submit' formMethod='POST' className={styles.submit}/>
    </form>
    <div >My contact - saimukul87@gmail.com</div></>
  )
}

export default contact