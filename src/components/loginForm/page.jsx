"use client"
import React, { useEffect } from 'react'
import styles from "./loginForm.module.css"
import { useFormState } from "react-dom";
import { login } from '@/lib/action';
import { useRouter } from 'next/navigation';
import Link from "next/link"


const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined)
    const router = useRouter()
    
    // useEffect(()=>{
    // state?.success && router.push("/")
    // },[state?.success, router])
  
  return (
        <form action={formAction} className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button className={styles.btn}>Login</button>
        {state?.error}
        <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
  )
}

export default LoginForm