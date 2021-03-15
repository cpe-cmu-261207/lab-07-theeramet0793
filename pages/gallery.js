import Link from "next/link";
const Gallery = () => {
  return (
    <div id="contact">
      <table
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ff9f80",
          borderStyle: "double",
          borderWidth: "10px",
          borderColor: "#fcf7e9"
        }}
      >
        <tr>
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

      <table style={{ width: "100%", borderStyle: "dashed" }}>
        <tr style={{ textAlign: "center" }}>
          <td>
            <h1>Theeramet Metha</h1>
            <h2>Web Developer</h2>
            <h3>
              <Link href="mailto:theerametmetha@gmail.com">
                theerametmetha@gmail.com
              </Link>
            </h3>
            <h3>0965585186</h3>
          </td>
          <td>
            <img
              src="pic1.jpg"
              alt="myself"
              style={{
                width: "250px",
                height: "250px",
                alignItems: "baseline"
              }}
            ></img>
          </td>
        </tr>
      </table>

      <h2>Gallery</h2>

      <table
        align="center"
        style="width:80%"
        style="padding: 15px;  border:1px solid;"
      >
        <tr align="center">
          <td>
            <img
              src="pic2.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic3.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic4.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic5.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
        </tr>
        <tr align="center">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr align="center">
          <td>
            <img
              src="pic6.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic7.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic8.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic9.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
        </tr>
        <tr align="center">
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr align="center">
          <td>
            <img
              src="pic10.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic11.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic12.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="pic1.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
        </tr>
        <tr align="center">
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
        </tr>
      </table>
    </div>
  );
};
export default Gallery;