import Link from "next/link";
const Contact = () => {
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

      <h2>Contact</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderStyle: "double",
          borderWidth: "10px",
          borderColor: "#ff9f80",
          backgroundColor: "#fcf7e9"
        }}
      >
        <tr>
          <td>
            <section>
              <nav style={{ width: "40%", float: "left" }}>
                <ul>
                  <li>
                    <h4>First name :</h4>
                  </li>
                  <li>
                    <h4>Last name :</h4>
                  </li>
                  <li>
                    <h4>Subject :</h4>
                  </li>
                  <li>
                    <h4>Massage :</h4>
                  </li>
                  <li>
                    <h4>Phone :</h4>
                  </li>
                  <li>
                    <h4>E-mail :</h4>
                  </li>
                </ul>
              </nav>
            </section>
          </td>
          <td>
            <section>
              <article style={{ width: "60%" }}>
                <form action="/action_page.php">
                  <br></br>
                  <p>
                    <input type="text" id="fname" name="fname"></input>
                  </p>
                  <p>
                    <input type="text" id="lname" name="lname"></input>
                  </p>
                  <p>
                    <input type="text" id="subject" name="subject"></input>
                  </p>
                  <p>
                    <input type="text" id="massage" name="massage"></input>
                  </p>
                  <p>
                    <input type="text" id="phone" name="phone"></input>
                  </p>
                  <p>
                    <input type="text" id="mail" name="mail"></input>
                  </p>
                  <br></br>
                  <input type="submit" value="Submit"></input>
                </form>
              </article>
            </section>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Contact;