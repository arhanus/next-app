import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

/* API İLE DATA FETCH*/
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next: {revalidate: 3600}}); //yazarak kaç saniyede bir yenileneceğini belirtebilirsin
  if(!res.ok){
  throw new Error("Something went wrong");
}
return res.json();
}


  
  const Blog = async () => {
    const posts = await getData();
    
  //API OLMADAN DATA FETCH
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
