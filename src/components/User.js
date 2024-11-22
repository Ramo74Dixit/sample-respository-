import React, { useEffect, useState } from 'react'
// url - https://jsonplaceholder.typicode.com/posts
// Design Custom Hook
// Name of Custom Hook- useFetch
function useFetch(url){
  // para 1->Data , loading , err 
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const[err,setErr]=useState(null);
  // useEffect to fetch Data
  useEffect(()=>{
    const fetchData= async () =>{
      // use try catch block for fetching the data
      try{
        const response=await fetch(url);
        const result=await response.json();
        setData(result);
      }catch(error){
        setErr(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[url])
  return {data,loading,err};
}
const User = () => {
  const {data,loading,err}=useFetch("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
      <h1>Data Fetch Using Custom Hook</h1>
      {loading && <p>Loading..</p>}
      {err && <p>Error : {err.message}</p>}
      {data && (
        <ul>
          {
            data.map((post)=>(
              <li key={post.id}>{post.title}</li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default User
