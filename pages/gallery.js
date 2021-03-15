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
            <h1>Sunantha Rueangrit</h1>
            <h2>Web Developer</h2>
            <h3>
              <Link href="mailto:sunantha_ru@cmu.ac.th">
                sunantha_ru@cmu.ac.th
              </Link>
            </h3>
            <h3>0812345688</h3>
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
              src="Cake.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="Pancakes.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="Macaroons.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="cubcake.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
        </tr>
        <tr align="center">
          <td>Cake</td>
          <td>Pancakes</td>
          <td>Macaroons</td>
          <td>cubcake</td>
        </tr>
        <tr align="center">
          <td>
            <img
              src="Noodles.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="Bibimbap.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="chicken.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="Sushi.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
        </tr>
        <tr align="center">
          <td>Noodles</td>
          <td>Bibimbap</td>
          <td>chicken</td>
          <td>Sushi</td>
        </tr>
        <tr align="center">
          <td>
            <img
              src="Cantaloupe.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="watermelon.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="Passion.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
          <td>
            <img
              src="Coco.jpg"
              style={{ heigth: "300px", width: "300px" }}
            ></img>
          </td>
        </tr>
        <tr align="center">
          <td>Cantaloupe</td>
          <td>watermelon</td>
          <td>Passion</td>
          <td>Coco</td>
        </tr>
      </table>
    </div>
  );
};
export default Gallery;