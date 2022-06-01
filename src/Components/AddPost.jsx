import React from 'react'
import { useState } from 'react';

export default function AddPost(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        props.addPost(title, content)
    }
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Add a Post</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" onChange={(e)=>{setContent(e.target.value)}} value={content} className="form-control" id="content" />
                </div>
                <button type="submit" className="btn btn-primary">Add Post</button>
            </form>
        </div>
    )
}
