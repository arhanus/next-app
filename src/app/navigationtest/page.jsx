"use client"
import React from 'react'
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const NavigationTextPage = () => {
    
    // CLIENT SIDE NAVIGATION
    const router = useRouter() // routing işlemleri yapabilmeyi sağlar.
    const pathname = usePathname() // url'deki pathname ile işlem yapabilmeyi sağlar.
    const searchParams = useSearchParams() //url'in sonundaki queryler ile işlem yapabilmeyi sağlar.

    const q = searchParams.get("q")

    console.log(q)

    const handleClick = () => {
        console.log("clicked")
        router.push("/")
        //push: parametredeki urlye yönlendirir,
        //back: geri gider, forward: ileri gider,
        //prefetch: butonun olduğu sayfaya girildiği anda sayfa bilgisini çeker.
        //replace: butonun olduğu sayfaya girildiği anda sayfa bilgisini değiştirir.
        //
    }

    
    return (
    
    <div>
        <Link href="/home" prefetch={false}>Click Here</Link>
        <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
    }

export default NavigationTextPage
