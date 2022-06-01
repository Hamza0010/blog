import React from 'react'

export default function Post(props) {
  return (
    <div>
        <p>{props.post.srno}</p>
      <h4>{props.post.title}</h4>
      <p>
          {props.post.content}
      </p>
      <button className='btn btn-danger'onClick = {()=>{props.onDelete(props.post)}}>Delete </button>
    </div>
  )
}


