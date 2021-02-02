import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])

    const fetch = async () => {
        if(postId){
            const response = await axios.get(
                '${baseURL/post/${postID}}',
                {
                    header: {
                        'app-id' : '60155b1129a32e0319672e4a' 
                    }
                }
            )
            console.log(response.data)
            setPost(response.data)
        }
    }
    useEffect(fetch,[postId])

    useEffect(()=>{
        const fetch = async() =>{
            const response = await axios.get(
                '${baseURL}/post/${postID}/comment',
                {
                    header: {
                        'app-id' : '60155b1129a32e0319672e4a' 
                    }
                }
            )
            console.log(response.data)
            setComment(response.data.data)
        }
        fetch()
    },[])

    return (
        <>
            <h1>display post data from api here</h1>
            {post!=null?(
                <div style={{margin: '20px',padding:'0px'}}>
                <p>tag : {post.tags}</p>
                <img src={post.image} width='250' />
                <p>{post.owner.firstname}{post.owner.lastname}</p>
                <p>Likes : {post.like}</p>
                <p><strong>comments</strong></p>
                {
                    comment.map( item=>(
                        <p>
                            {item.owner.firstname} {item.owner.lastname} : {item.message}
                        </p>
                    ))
                }
               </div>
            ):null}
            <link href="/post">
                back
            </link>
        </>
    )
}

export  default  Post

