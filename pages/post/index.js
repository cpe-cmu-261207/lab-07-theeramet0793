import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect (()=>{
        const fetch = async () => {
            setLoading(true)
            const response = await axios.get(
                baseURL ,
                {
                    header: {
                        'app-id' : '60155b1129a32e0319672e4a' 
                    }   
                }
            )
            console.log(response.data)
            setPosts(response.data.data)
            setLoading(false)
        }
        fetch()
    },[])

    return (
        <>
            <h1 style={{margin: '20px'}}>All Posts</h1>
            {loading && <p style={{margin: '20px'}}>Loading...</p>}
            <Link href="/">
                <button>Back</button>
            </Link>
            {
                posts.map(post=>(
                    <div style={{margin: '20px', padding: '0px'}}>
                    <p>post : {post.text}</p>
                    <img src={post.image} width='250' />
                    <p>Likes : {post.likes}</p>
                    <link key={post.id} href={'/post/${post.id}'}>
                        <button>go to this page</button>
                    </link>
                    <p>__________________________________________________</p>
                    </div>
                ))
            }
            
        </>
    )
}

export default  Posts
