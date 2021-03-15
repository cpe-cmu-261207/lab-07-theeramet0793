import Link from "next/link";
const Home = () => {
  return (
    <div id="index">
      <table style={{ width: "100%", borderStyle: "dashed" }}>
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

      <table style={{ width: "100%", borderStyle: "dashed" }}>
        <tr>
          <td>
            <p>
              <h2>Profile</h2>
            </p>
            <p>
              <b>Address : </b>443 Banpaina, Bantuek, Sisatchanalai, Sukhuthai
              64130{" "}
            </p>
            <p>
              <b>Facebook :</b>
              <Link href="https://web.facebook.com/ewl.sunanta">
                {" "}
                Sunanta Ruangrit
              </Link>
            </p>
            <p>
              <b>Instagram :</b>
              <Link href="https://www.instagram.com/aew_babygil/?hl=en">
                {" "}
                aew_babygil
              </Link>
            </p>
            <h2>Skills</h2>
            <p>
              <b>Web Design </b>: Assertively exploit wirelessinitiatives rather
              thansynergistic corecompetenc
            </p>
            <p>
              <b>Interface Design</b> : Credibly streamline mission-critical
              value withmultifunctionalfunctionalit
            </p>
            <p>
              <b>Project Direction</b> : Proven ability to lead and manage a
              widevariety of design and development projectsin team and
              independent
            </p>
            <h2>Technical</h2>
            <p>HTML, CSS, Javascript</p>
            <h2>Education</h2>
            <p>
              <b>Chiang Mai University</b>
            </p>
            <p>
              Sophomore,Computer Engineering Major, Engineering Faculty— 2.99
              GPA
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;