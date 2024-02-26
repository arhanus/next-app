import React, { Suspense } from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image"


/*
const getUser = async(userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"})
    if(!res.ok){
        throw new Error("Something went wrong")
    }

    return res.json()
}
*/

const PostUser = async ({ userId }) => {
  //FETCH DATA WITH AN API
  //const user = await getUser(userId)

  //FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Suspense fallback="Loading...">
      <Image
            className={styles.avatar}
            src={user.img ? user.img : "/noavatar.png"}
            alt=""
            width={50}
            height={50}
            
          />
      </Suspense>
      <div className={styles.text}>
      <div className={styles.title}>Author</div>
      <div className={styles.username}>{user.username}</div>
      </div>
    </div>
  );
};

export default PostUser;
