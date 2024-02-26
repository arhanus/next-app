"use client"
import React, { useEffect } from 'react'
import styles from "./registerForm.module.css"
import { useFormState } from "react-dom";
import { register } from '@/lib/action';
import { useRouter } from 'next/navigation';
import Link from "next/link"


const RegisterForm = () => {
    const router = useRouter()
    const [state, formAction] = useFormState(register, undefined)
    useEffect(()=>{
    state?.success && router.push("/login")
    },[state?.success, router])
  
  return (
        <form action={formAction} className={styles.form}>
        <h2>Register</h2>
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="password again" name="passwordRepeat" />
        <button className={styles.btn}>Register</button>
        {state?.error}
        <Link href="/login">
         Have an account? <b>Login</b>
        </Link>
      </form>
  )
}

export default RegisterForm