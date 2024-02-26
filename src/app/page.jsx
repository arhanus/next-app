
import styles from "./home.module.css"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  
  return (
    
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Order your unique and responsive website now!</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est 
            iste pariatur nesciunt reiciendis laboriosam quaerat doloribus culpa!
          </p>
          <div className={styles.buttons}>
            <Link className={styles.button} href={"/about"}>Learn More</Link>
            <Link className={styles.button}  href={"/contact"} >Contact</Link>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
          </div>
        </div>
          <div className={styles.imgContainer}>
            <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
          </div>
      </div>
    
  )
}
