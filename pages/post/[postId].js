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

    
    return (
        <>
            <h1>display post data from api here</h1>
        </>
    )
}

export  default  Post

