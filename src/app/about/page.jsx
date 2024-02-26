import React from 'react'
import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: "About Arhan Us",
}

const About = () => {
  return (
    <div>
      <div className={styles.container}>

        <div className={styles.textContainer}>
          
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.desc}>I am a university student in Turkey proficient in both English and Turkish.
            I specialize in providing frontend support for your team.
            Here are the libraries I utilize to create responsive and well-designed websites:</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>ReactJS</h1>
            </div>
            <div className={styles.box}>
              <h1>Next.JS</h1>
            </div>
            <div className={styles.box}>
              <h1>Redux</h1>
            </div>
            <div className={styles.box}>
              <h1>React Query</h1>
            </div>
            
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" sizes='' fill className={styles.img}/>
        </div>
      </div>
      </div>
    
  )
}

export default About