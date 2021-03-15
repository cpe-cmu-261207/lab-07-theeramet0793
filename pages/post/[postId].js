import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const baseURL = "https://dummyapi.io/data/api";
const password = "6018cf41531eb2ce30e90218";
const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (!postId) {
      return;
    }
    axios
      .get(baseURL + "/post/" + postId, { headers: { "app-id": password } })
      .then((respond) => {
        console.log(respond);
        setPost(respond.data);
      });
    axios
      .get(baseURL + "/post/" + postId + "/comment", {
        headers: { "app-id": password }
      })
      .then((respond) => {
        console.log(respond);
        setComment(respond.data.data);
      });
  }, [postId]);

  return (
    <>
      {post && (
        <div>
          <h1>{"Post : " + post.text}</h1>
          <p>{"tags : " + post.tags}</p>
          <p>
            <p style={{ textAlign: "center" }}>
              <img className="imgflame" src={post.image}></img>
            </p>
            <p>{post.owner.firstName + " " + post.owner.lastName}</p>
            <p>{"Likes : " + post.likes}</p>
            {comment.map((item) => {
              return (
                <div key={item.id}>
                  <p>
                    {item.owner.firstName + " " + item.owner.lastName + " : "}
                    {item.message}
                  </p>
                </div>
              );
            })}
          </p>
        </div>
      )}
      <div>
        <Link href={"/post"}>
          <button>Go back</button>
        </Link>
      </div>
    </>
  );
};

export default Post;

