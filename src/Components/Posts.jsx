import React from 'react'
import Post from "./Post"

export default function Posts({posts, onDelete}) {
    
  return (
    <div className='container'>
        <h3 className='my-2'>
            Posts
        </h3>
        {posts.length === 0 ? "No post shown..." : posts.map((post)=> {
            return <Post key={post.srno} post={post} onDelete={onDelete}/>
        })}
        
        
    </div>
  )
}
