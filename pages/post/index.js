import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
const baseURL = "https://dummyapi.io/data/api";
const password = "6018cf41531eb2ce30e90218";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL + "/post", { headers: { "app-id": password } })
      .then((respond) => {
        console.log(respond);
        setPosts(respond.data.data);
      });
  }, []);
  return (
    <>
      <table
        style={{
          width: " 100%",
          backgroundColor: "#ff9f80",
          borderStyle: "double",
          borderWidth: "10px",
          borderColor: "#fcf7e9"
        }}
      >
        <tr align="center">
          <td>
            {" "}
            <Link href={"/home"}>
              <p style={{ textAlign: "center" }}> Home </p>
            </Link>{" "}
          </td>
          <td>
            {" "}
            <Link href={"/gallery"}>
              <p style={{ textAlign: "center" }}> Gallery </p>
            </Link>{" "}
          </td>
          <td>
            {" "}
            <Link href={"/calgpa"}>
              <p style={{ textAlign: "center" }}> GPA Calculator </p>
            </Link>{" "}
          </td>
          <td>
            {" "}
            <Link href={"/contact"}>
              <p style={{ textAlign: "center" }}> Contact </p>
            </Link>{" "}
          </td>
          <td>
            {" "}
            <Link href={"/post"}>
              <p style={{ textAlign: "center" }}> Post </p>
            </Link>{" "}
          </td>
        </tr>
      </table>
      <h2>All Posts</h2>

      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h4>{"Post : " + item.text}</h4>
            <p style={{ textAlign: "center" }}>
              <Link href={"/post/" + item.id}>
                <img
                  className="imgflame"
                  src={item.image}
                  style={{ width: "70%" }}
                ></img>
              </Link>
              <p style={{ color: "#ff9f80" }}>{"Likes : " + item.likes}</p>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
