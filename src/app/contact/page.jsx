import React from 'react'
import styles from "./contact.module.css"
import Image from "next/image"

export const metadata = {
  title: "Contact Page",
  description: "Arhan Us's contact",
}

const Contact = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt='' fill className={styles.img}/>
    </div>
    <div className={styles.formContainer}>
      <h1>Contact</h1>
      <form action="" className={styles.form}>
        <input type="text" placeholder='Name and Surname'/>
        <input type="text" placeholder='Email Adress'/>
        <input type="text" placeholder='Phone Number (Optional)'/>
        <textarea name='' id='' cols="30" rows="10" placeholder='Message'/>
        <button>Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact