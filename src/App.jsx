import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './component/Post';
import Pagination from './component/Pagination';
const App = () => {
  const [data,setData]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [lastPage,setLastPage]=useState(10)
   useEffect(()=>{
    const fetchPost=async()=>{
     const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(res.data)
    }
    fetchPost()
   },[])

  //  Get current post
  const indexOfLastPost=currentPage * lastPage
  const indexOfFirstPost=indexOfLastPost - lastPage
  const currentPost=data.slice(indexOfFirstPost,indexOfLastPost)
  // console.log(currentPost);
  const paginate = (pageNumber) => {
     setCurrentPage(pageNumber)
  }
  return (
    <>
     <div className="">
       <Post data={currentPost}/>
       <Pagination paginate={paginate}/>
     </div>
    </>
  )
}

export default App
