import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FetchApi() {
    const [posts, setPost] = useState ([]);
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res)
            setPost(res.data)

        }).catch ( (err) => {
            console.log(err)
        })
    })
  return (
    <div>
                <ul>
                    {
                        posts.map( (post) => {
                            
                            return <div>
                                 <li> {post.useId} </li>
                                     <li key={post.id}>{post.title}</li>
                                     <li> {post.body} </li>
                            </div>
                                 
                        
                           
                        })
                    }
                </ul>
    </div>
  )
}
