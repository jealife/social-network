import React,{useState,useEffect} from 'react'
import Post from './Post'
import axios from 'axios'
// import {post} from
export default function Posts() {

  const [posts,setPost]=useState([]);

useEffect(() => {
  () => {
    axios.get("/Data/posts.json").then((res)=>{
      console.log(res);
    })
  }
}, [posts])







  return (
    <>
      <Post avatar="img/avatar/5.jpg" name="diana barry" time="1 hour ago" desc="Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴" postImg="img/posts/1.jpg" />
    </>
  )
}
